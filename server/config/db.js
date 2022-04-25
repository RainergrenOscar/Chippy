const mongoose = require("mongoose")

//Connect to our Database usin mongoose
const connectDB = async () => {
	try {
		// Try to connect to the database
		const conn = await mongoose.connect(process.env.MONGO_URI)
		console.log(`Database connected : ${conn.connection.host}`)
	} catch (error) {
		console.log(`${err.message}`)
		process.exit(1)
	}
}

module.exports = connectDB
