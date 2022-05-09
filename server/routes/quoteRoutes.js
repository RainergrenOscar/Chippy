const express = require("express")
const router = express.Router()
const {
	createQuote,
	getQuote,
	getSingleQuote,
	deleteQuote,
	updateQuote,
} = require("../controllers/quoteController")
const { protected } = require("../middleware/auth")

router.route("/").get(protected, getQuote).post(protected, createQuote)
//get specific quote, delete quotes and update quotes.
router
	.route("/:id")
	.get(protected, getSingleQuote)
	.delete(protected, deleteQuote)
	.put(protected, updateQuote)

module.exports = router
