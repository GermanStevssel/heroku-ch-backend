import { randomNumber } from "./getRandomNumber.js";

process.on("message", (cant) => {
	const numbers = randomNumber(cant);
	process.send({ res: numbers });
});
