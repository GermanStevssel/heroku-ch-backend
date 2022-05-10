import jwt from "jsonwebtoken";
const PRIVATE_KEY = "myprivatekey";

const generateToken = (user) => {
	const token = jwt.sign({ data: user }, PRIVATE_KEY, { expiresIn: "10m" });
	return token;
};

export default generateToken;
