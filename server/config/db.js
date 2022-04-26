const mongoose = require("mongoose")

//Connect to our Database using mongoose
const connectDB = async () => {
	try {
		// Try to connect to the database
		const conn = await mongoose.connect(process.env.MONGO_URI)
		console.log(`Database connected : ${conn.connection.host}`)
		// Send error message if we cant reach database
	} catch (error) {
		console.log(`${err.message}`)
		process.exit(1)
	}
}

module.exports = connectDB
