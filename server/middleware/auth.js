const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

const protected = asyncHandler(async (req, res, next) => {
	let token

	// Check if token is in headers
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			// Get token from header and turn it into an array
			token = req.headers.authorization.split(" ")[1]

			//Verify token
			const decoded = jwt.verify(token, process.env.JWT_SECRET)

			// Get user from token
			req.user = await User.findById(decoded.id).select("-password")

			//Call next piece of middleware

			next()
		} catch (error) {
			console.log(error)
			res.status(401)
			throw new Error("Not authorized")
		}
	}
	if (!token) {
		res.status(401)
		throw new Error("Not authorized")
	}
})

module.exports = { protected }
