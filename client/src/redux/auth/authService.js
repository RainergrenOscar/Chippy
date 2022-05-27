import axios from "axios"

// url endpoint for the auth
const url = "/api/users"

/**
 * Signup user function
 * @async
 * @param {String} userData
 * @returns The data from the fetch request.
 */
const signupUser = async (userData) => {
	// Send HTTP post request using axios to the backend
	const response = await axios.post(url, userData)

	// If we got a response we set it to localstorage
	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data))
	}

	return response.data
}

/**
 * Login user function
 * @async
 * @param {String} userData
 * @returns the data from the fetch request
 */
const loginUser = async (userData) => {
	// Send HTTP post request to the backend
	const response = await axios.post(`${url}/login`, userData)

	// If we got a response we set the user to localstorage
	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data))
	}

	return response.data
}

/**
 * Logout function
 * Removes the logged in user from localstorage
 */
const logoutUser = () => {
	localStorage.removeItem("user")
}

//Exports
const authService = {
	signupUser,
	logoutUser,
	loginUser,
}

export default authService
