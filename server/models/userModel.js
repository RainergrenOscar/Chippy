const mongoose = require("mongoose")

// Create user model for Mongo Database and pass in all fields
const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please add a name"],
		},
		email: {
			type: String,
			required: [true, "Please add a email"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Please add a password"],
		},
		// Some users might be admin to remove posts that is inappropriate
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		// Added timestamps so we can see time when we post the post.
		timestamps: true,
	}
)

module.exports = mongoose.model("User", userSchema)
