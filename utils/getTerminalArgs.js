export const getArgs = (data) => {
	let result = "";

	delete data["$0"];

	if ((data._.length === 0) & (Object.keys(data).length === 1)) {
		result = "No hay argumentos de entrada";
	}

	const dataWithoutAttribute = [...data._];

	dataWithoutAttribute.forEach((elem) => (result = result + elem + " "));

	delete data._;

	const arrOfdataWithArgs = Object.entries(data);

	arrOfdataWithArgs.forEach((elem) => {
		let attr = elem[0];
		let value = elem[1];

		if (attr.length === 1) {
			attr = "-" + attr;
		} else {
			attr = "--" + attr;
		}

		result = result + attr + " " + value + " ";
	});
	return result;
};
