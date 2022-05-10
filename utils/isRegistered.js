import Users from "../schema/users.schema.js";

const isRegistered = async (req, res, next) => {
	const { email } = req.body;
	const exists = await Users.find({ email: email });
	if (exists.length) {
		res.render("usuario-registrado");
		return;
	}
	next();
};

export default isRegistered;
