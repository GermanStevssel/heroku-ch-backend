import mongoose from "mongoose";
import moment from "moment";
import messageSchema from "../schema/message.schema.js";
import { config } from "../config/index.js";

const { model } = mongoose;
mongoose.connect(`${config.mongodb.url}`);

class MongoMessagesContainer {
	constructor(collection, schema) {
		this.collection = model(collection, schema);
	}

	getAll = async () => {
		try {
			return await this.collection.find({});
		} catch (err) {
			throw new Error(`Error al obtener todo: ${err}`);
		}
	};

	getById = async (id) => {
		try {
			const doc = this.collection.findById(id);

			if (!doc) {
				throw new Error(`id ${id} no encontrado`);
			}

			return doc;
		} catch (err) {
			throw new Error(`Error al obtener por id: ${err}`);
		}
	};

	deleteById = async (id) => {
		try {
			return await this.collection.findByIdAndDelete(id);
		} catch (err) {
			throw new Error(`Error al borrar id ${id}: ${err}`);
		}
	};

	deleteAll = async () => {
		try {
			const allDeleted = await this.collection.deleteMany({});
			return allDeleted;
		} catch (err) {
			throw new Error(`Error al borrar: ${err}`);
		}
	};

	save = async (object) => {
		console.log("Hola, guarde un mensaje");
		const date = moment(new Date()).format("DD/MM/YYY HH:mm:ss");
		object.date = date;
		try {
			return await this.collection.create(object);
		} catch (err) {
			throw new Error(`Error al guardar: ${err}`);
		}
	};

	updateById = async (id, object) => {
		try {
			return await this.collection.findByIdAndUpdate(id, object);
		} catch {
			throw new Error(`Error al actualizar: ${err}`);
		}
	};
}

export const mongoMessages = new MongoMessagesContainer(
	"messages",
	messageSchema
);
