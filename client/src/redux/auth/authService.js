import axios from "axios"

// url endpoint for the auth
const url = "/api/users"

// register user
const signupUser = async (userData) => {
	// Send HTTP post request using axios to the backend
	const response = await axios.post(url, userData)

	// If we got a response we set it to localstorage
	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data))
	}

	return response.data
}

// Login user
const loginUser = async (userData) => {
	// Send HTTP post request using axios to the backend
	const response = await axios.post(`${url}/login`, userData)

	// If we got a response we set it to localstorage
	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data))
	}

	return response.data
}

// Logout user
const logoutUser = () => {
	localStorage.removeItem("user")
}

const authService = {
	signupUser,
	logoutUser,
	loginUser,
}

export default authService
