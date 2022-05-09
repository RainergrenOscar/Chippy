import axios from "axios"

const url = "/api/quotes"

//create new quote
const createQuote = async (quoteData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.post(url, quoteData, config)

	return response.data
}
// get quotes
const getQuotes = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.get(url, config)

	return response.data
}

// delete quotes
const deleteQuote = async (quoteId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.delete(url + "/" + quoteId, config)

	return response.data
}

const quoteService = {
	createQuote,
	getQuotes,
	deleteQuote,
}

export default quoteService
