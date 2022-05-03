const asyncHandler = require("express-async-handler")

const User = require("../models/userModel")
const Quote = require("../models/QuoteModel")

// @desc get logged in users quotes
// @route GET /api/quotes
// @access private
const getQuote = asyncHandler(async (req, res) => {
	//First get the user using jwt > id
	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error("User not found")
	}

	const quotes = await Quote.find({ user: req.user.id })

	res.status(200).json(quotes)
})

// @desc Create new quote
// @route POST /api/quotes
// @access private
const createQuote = asyncHandler(async (req, res) => {
	const { quote, author } = req.body
	const user = await User.findById(req.user.id)
	if (!quote || !author) {
		res.status(400)
		throw new Error("Must add quote and author")
	}

	if (!user) {
		res.status(401)
		throw new Error("User not found")
	}

	const post = await Quote.create({
		quote,
		author,
		user: req.user.id,
	})

	res.status(201).json(post)
})

// @desc Get specific quote
// @route GET /api/quotes/:id
// @access private
const getSingleQuote = asyncHandler(async (req, res) => {
	//First get the user using jwt > id
	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error("User not found")
	}

	const quote = await Quote.findById(req.params.id)

	if (!quote) {
		res.status(404)
		throw new Error("Cant find the quote")
	}

	res.status(200).json(quote)
})

// @desc Delete quote
// @route DELETE /api/quotes/:id
// @access private
const deleteQuote = asyncHandler(async (req, res) => {
	//First get the user using jwt > id
	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error("User not found")
	}

	const quote = await Quote.findById(req.params.id)

	if (!quote) {
		res.status(404)
		throw new Error("Cant find the quote")
	}

	if (quote.user.toString() !== req.user.id) {
		res.status(401)
		throw new Error("YOU CANT DO THAT MY MAN")
	}

	await quote.remove()

	res.status(200).json({ message: "DELETED" })
})

// @desc update quote
// @route PUT /api/quotes/:id
// @access private
const updateQuote = asyncHandler(async (req, res) => {
	//First get the user using jwt > id
	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error("User not found")
	}

	const quote = await Quote.findById(req.params.id)

	if (!quote) {
		res.status(404)
		throw new Error("Cant find the quote")
	}

	if (quote.user.toString() !== req.user.id) {
		res.status(401)
		throw new Error("YOU CANT DO THAT MY MAN")
	}

	const updatedQuote = await Quote.findByIdAndUpdate(req.params.id, req.body)

	res.status(200).json(updatedQuote)
})

module.exports = {
	getQuote,
	createQuote,
	getSingleQuote,
	updateQuote,
	deleteQuote,
}
