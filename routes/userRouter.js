import { Router } from "express";
import bcrypt from "bcrypt";
import Users from "../schema/users.schema.js";
import isRegistered from "../utils/isRegistered.js";
import generateToken from "../utils/generateToken.js";
import { logger } from "../utils/winston/index.js";

export const registerRouter = Router();
export const loginRouter = Router();

registerRouter.get("/", (req, res) => {
	logger.log("info", `ruta /register, metodo get`);
	res.render("registro");
});

// ------ Register ------

registerRouter.post("/", isRegistered, async (req, res) => {
	logger.log("info", `ruta /register, metodo post`);
	try {
		const { email, password } = req.body;
		if (!email || !email.length) {
			res.status(401).json({ error: "Datos ingresados inválidos" });
			return;
		}
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		const newUser = {
			email: email,
			password: hashedPassword,
		};
		await Users.create(newUser);
		res.redirect("login");
	} catch (err) {
		console.log(err);
	}
});

// ------ Login ------

loginRouter.get("/", (req, res) => {
	logger.log("info", `ruta /login, metodo get`);
	res.render("login");
});

loginRouter.post("/", async (req, res) => {
	logger.log("warn", `ruta /login, metodo post`);
	const { email, password } = req.body;
	console.log("email:", email);
	console.log("pass:", password);
	if (!email || !email.length) {
		res.status(401).send();
		return;
	}

	try {
		const user = await Users.find({ email: email });
		const confirmPassword = await bcrypt.compare(password, user[0].password);
		if (!confirmPassword) {
			return res.render("login-error");
		}
		const access_token = generateToken(user);
		console.log("access_token:", access_token);
		// res.json({ access_token });
		res.redirect("/");
	} catch (error) {
		console.log(error);
	}
});
