import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	id: { type: String, required: true },
	timestamp: { type: String, required: true, max: 1000 },
	nombre: { type: String, required: true, max: 100 },
	descripcion: { type: String, required: true, max: 100 },
	codigo: { type: String, required: true },
	foto: { type: String, required: true, max: 100 },
	precio: { type: Number, required: true },
	stock: { type: Number, required: true },
});

export default productSchema;
