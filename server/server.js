const express = require("express")
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")
const { errorHandler } = require("./middleware/errorMiddlevare")

// Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use("/api/users", require("./routes/userRoutes"))

//Start server on port from .env else start on port 8000
const PORT = process.env.PORT || 5000

app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
