import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
	id: { type: String, required: true, max: 100 },
	timestamp: { type: String, required: true, max: 100 },
	productos: { type: Array, required: true, max: 100 },
});

export default cartSchema;
