import { Router } from "express";
import authenticateToken from "../utils/authenticateToken.js";

export const webRouter = Router();
let user = "";

webRouter.get("/auth", authenticateToken, (req, res) => {
	user = req.user;
	console.log(user);
	res.send("usuario validado");
});

webRouter.get("/", (req, res) => {
	if (user === "") {
		return res.redirect("login");
	}
	res.render("index", { email: user[0].email });
});

webRouter.get("/logout", (req, res) => {
	const name = req.session.name;
	console.log("name:", name);
	req.session.destroy();
	res.render("logout", { name });
});

webRouter.get("*", (req, res) => {
	res.status(404).json({
		error: -2,
		description: `ruta ${req.originalUrl} método get no implementado`,
	});
});
