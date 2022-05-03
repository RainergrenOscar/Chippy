const mongoose = require("mongoose")

// Create schema and model with relation to the userSchema
const quoteSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		// Refering to the "User" collection we created for login
		ref: "User",
	},
	quote: {
		type: String,
		required: [true, "No no no, you must ad a quote"],
		unique: true,
	},
	author: {
		type: String,
		required: [true, "Ay, you must enter the author"],
	},
	likes: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		},
	],
	date: {
		type: Date,
		default: Date.now,
	},
})

module.exports = mongoose.model("Quotes", quoteSchema)
