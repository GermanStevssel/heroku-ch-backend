import { normalize, schema } from "normalizr";

const authorSchema = new schema.Entity("author", {}, { idAttribute: "email" });
const textSchema = new schema.Entity(
	"text",
	{ author: authorSchema },
	{ idAttribute: "id" }
);
const chatMessages = new schema.Entity(
	"chatMessages",
	{ author: [authorSchema], messages: [textSchema] },
	{ idAttribute: "id" }
);

const normalizer = (messages) => {
	const normalizedMessages = messages.map((message) => ({
		author: message.author,
		text: message.text,
		date: message.date,
		id: message._id.toString(),
	}));

	const normalized = normalize(
		{ id: "messages", messages: normalizedMessages },
		chatMessages
	);

	return normalized;
};

export default normalizer;
