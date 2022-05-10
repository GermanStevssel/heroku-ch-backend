import { Router } from "express";
import { fork } from "child_process";

export const randomRouter = Router();
const child_process = fork("./utils/child_process.js");

randomRouter.get("/", (req, res) => {
	const cant = req.query.cant || 100000000;
	child_process.send(cant);
	child_process.on("message", (msj) => {
		res.send(msj.res);
	});
});
