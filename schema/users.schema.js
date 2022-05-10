import mongoose from "mongoose";
import { config } from "../config/index.js";

const { model } = mongoose;
mongoose.connect(`${config.mongodb.url}`);

const usersSchema = new mongoose.Schema({
	email: { type: String, required: true, min: 4 },
	password: { type: String, required: true, max: 100, min: 6 },
	token: { type: String, max: 100 },
});

const Users = model("users", usersSchema);

export default Users;
