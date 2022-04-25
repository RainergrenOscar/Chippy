const express = require("express")
const router = express.Router()
const { protected } = require("../middleware/auth")
const {
	loginUser,
	registerUser,
	getMe,
} = require("../controllers/userController")

//Routes
//Create new user
router.post("/", registerUser)
//Login user
router.post("/login", loginUser)
//Se my profile
// protected is from middleware auth
router.get("/me", protected, getMe)

module.exports = router
