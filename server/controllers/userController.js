const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

// @desc Register a new user
// @route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
	//Save all data sent to register a user to variables
	const { name, email, password } = req.body

	//Validation
	if (!name || !email || !password) {
		res.status(400)
		throw new Error("Please include all fields")
	}

	// Check if user exists by checking if the email has been already used
	const exists = await User.findOne({ email })

	if (exists) {
		res.status(400)
		throw new Error("This account is already being used...")
	}
	// Hash password
	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	// Create user
	const user = await User.create({ name, email, password: hashedPassword })

	// Check if user was created / exists
	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error("Invalid data...")
	}
})
// @desc Login a user
// @route /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
	// Get email and password from body
	const { email, password } = req.body

	const user = await User.findOne({ email })
	// Check if user and password matches
	// bcrypt.compare checks if the hashed password matches the users password
	if (user && (await bcrypt.compare(password, user.password))) {
		res.status(200).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		})
	} else {
		res.status(401)
		throw new Error("Invalid data...")
	}
})

// @desc get current user
// @route get /api/users/me
// @access private
const getMe = asyncHandler(async (req, res) => {
	const user = {
		id: req.user._id,
		email: req.user.email,
		name: req.user.name,
	}
	res.status(200).json(user)
})

// Genereate json web token
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "100d",
	})
}

module.exports = {
	registerUser,
	loginUser,
	getMe,
}
