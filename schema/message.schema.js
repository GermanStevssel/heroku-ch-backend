import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
	author: {
		id: { type: String, requiredd: true },
		nombre: { type: String, required: true, max: 100 },
		apellido: { type: String, required: true, max: 100 },
		edad: { type: Number, required: true, max: 110 },
		alias: { type: String, required: true, max: 100 },
		avatar: { type: String, required: true },
	},
	text: { type: String, required: true, max: 1000 },
	date: { type: String, required: true },
});

export default messagesSchema;
