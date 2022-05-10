import { Router } from "express";
const authRouter = Router();

export const isLoggedIn = (req, res, next) => {
	if (!req.session?.email) {
		res.redirect("/login");
		return;
	}
	next();
};

authRouter.get("/", (req, res) => {
	res.render("login");
});

authRouter.post("/", (req, res) => {
	const name = req.body.name;
	if (!name || !name.length) {
		res.status(401).json({ error: "Datos ingresados inválidos" });
	}
	req.session.name = name;
	res.redirect("/");
});

export default authRouter;
