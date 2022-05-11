import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import quoteService from "./quoteService"

// Setting the initial state for the quotes
const initialState = {
	quotes: [], //Array if we have many quotes
	quote: {}, //Object if we have single quote
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
}

//Create new quote
export const createQuote = createAsyncThunk(
	"quote/create",
	async (quoteData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await quoteService.createQuote(quoteData, token)
		} catch (error) {
			// set the message to the backend server message
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			//return with the message
			return thunkAPI.rejectWithValue(message)
		}
	}
)

//Fetch quotes
export const getQuotes = createAsyncThunk(
	"quote/getAll",
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await quoteService.getQuotes(token)
		} catch (error) {
			// set the message to the backend server message
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			//return with the message
			return thunkAPI.rejectWithValue(message)
		}
	}
)

//Delete quote
export const deleteQuote = createAsyncThunk(
	"quote/delete",
	async (quoteId, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await quoteService.deleteQuote(quoteId, token)
		} catch (error) {
			// set the message to the backend server message
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			//return with the message
			return thunkAPI.rejectWithValue(message)
		}
	}
)

//Update quote
export const updateQuote = createAsyncThunk(
	"quote/update",
	async (updateData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await quoteService.updateQuote(
				updateData.cardId,
				token,
				updateData
			)
		} catch (error) {
			// set the message to the backend server message
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			//return with the message
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const quoteSlice = createSlice({
	name: "quote",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createQuote.pending, (state) => {
				state.isLoading = true
			})
			.addCase(createQuote.fulfilled, (state) => {
				state.isLoading = false
				state.isSuccess = true
			})
			.addCase(createQuote.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getQuotes.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getQuotes.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.quotes = action.payload
			})
			.addCase(getQuotes.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
})

//exports
export const { reset } = quoteSlice.actions
export default quoteSlice.reducer
