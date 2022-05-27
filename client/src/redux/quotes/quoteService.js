import axios from "axios"

const url = "/api/quotes"

/**
 * Create new quote Function
 * @async
 * @param {String} quoteData
 * @param {String} token
 * @returns the data from the fetch request
 * Function that sends a post request to the server with the quote data and the token from headers
 */
const createQuote = async (quoteData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.post(url, quoteData, config)

	return response.data
}

/**
 * Get all quotes function
 * @async
 * @param {String} token
 * @returns data from fetch request
 */
const getQuotes = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.get(url, config)

	return response.data
}

/**
 * Delete quote function
 * @param {String} quoteId
 * @param {String} token
 * @returns the data from fetch request
 * Function that send a delete request to the server with the ID from the quote and token from headers
 */
const deleteQuote = async (quoteId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.delete(url + "/" + quoteId, config)

	return response.data
}

/**
 * Update quote function
 * @param {String} quoteId
 * @param {String} token
 * @param {String} data
 * @returns  the data from fetch request
 * Function that send a put request to the server with the ID from a quote, token for auth and updated quote data.
 */
const updateQuote = async (quoteId, token, data) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.put(url + "/" + quoteId, data, config)

	return response.data
}

//Exports
const quoteService = {
	createQuote,
	getQuotes,
	deleteQuote,
	updateQuote,
}

export default quoteService
