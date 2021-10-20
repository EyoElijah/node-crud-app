const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		gender: String,
		status: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
