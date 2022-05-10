import { Router } from "express";
import yargs from "yargs";
import { getArgs } from "../utils/getTerminalArgs.js";

export const infoRouter = Router();
const data = yargs(process.argv.slice(2)).argv;

const info = {
	entryArgs: getArgs(data),
	platformName: process.platform,
	nodeVersion: process.version,
	rss: process.memoryUsage().rss,
	execPath: process.title,
	processId: process.pid,
	projectFolder: process.cwd(),
};

infoRouter.get("/", (req, res) => {
	res.render("info", { info });
});
