import cartSchema from "../../schema/carts.schema.js";

let cartsDao;

if (`${process.env.DB}` === "firebase") {
	const { default: CartsDaoFirebase } = await import(
		"../../containers/FirebaseContainer.js"
	);

	cartsDao = new CartsDaoFirebase("carts");
} else {
	const { default: CartsDaoMongo } = await import(
		"../../containers/MongoContainer.js"
	);

	cartsDao = new CartsDaoMongo("carts", cartSchema);
}

export default cartsDao;
