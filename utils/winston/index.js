import winston from "winston";
const LEVEL = Symbol.for("level");

const filterOnly = (level) => {
	return winston.format((info) => {
		if (info[LEVEL] === level) {
			return info;
		}
	})();
};

export const logger = winston.createLogger({
	level: "info",
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({
			filename: "logs/error.log",
			level: "error",
		}),
		new winston.transports.File({
			filename: "logs/warn.log",
			level: "warn",
			format: filterOnly("warn"),
		}),
	],
});
