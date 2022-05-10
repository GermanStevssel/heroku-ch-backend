import yargs from "yargs";
const options = {
	default: { PORT: 8080 },
	alias: { p: "port" },
};

export const yargObj = yargs(process.argv.slice(2))
	.default(options.default)
	.alias(options.alias).argv;
