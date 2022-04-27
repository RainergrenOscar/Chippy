// REDUX FOR AUTHORIZATION
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authService"

// Get "user" from localstorage
const user = JSON.parse(localStorage.getItem("user"))

// Setting the initial state. Check if user already exists in localstorage
const initialState = {
	user: user ? user : null,
	isError: false,
	isSucces: false,
	isLoading: false,
	message: "",
}

//Create async function for the register part
export const signupUser = createAsyncThunk(
	"auth/signup",
	async (user, thunkAPI) => {
		try {
			return await authService.signupUser(user)
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

//Login user
export const loginUser = createAsyncThunk(
	"auth/login",
	async (user, thunkAPI) => {
		try {
			return await authService.loginUser(user)
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

// Logout user
export const logoutUser = createAsyncThunk("auth/logout", async () => {
	await authService.logoutUser()
})

// Exporting the slice with different properties
const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false
			state.isError = false
			state.isSucces = false
			state.message = ""
		},
	},
	extraReducers: (builder) => {
		builder
			// When the request is pending set state.
			.addCase(signupUser.pending, (state) => {
				state.isLoading = true
			})

			// When the request is fulfilled
			.addCase(signupUser.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSucces = true
				state.user = action.payload
			})

			// When the request is rejected
			.addCase(signupUser.rejected, (state, action) => {
				state.isLoading = false
				state.user = null
				state.isError = true
				state.message = action.payload
			})
			.addCase(logoutUser.fulfilled, (state) => {
				state.user = null
			})
			// When the request is pending set state.
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true
			})

			// When the request is fulfilled
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSucces = true
				state.user = action.payload
			})

			// When the request is rejected
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false
				state.user = null
				state.isError = true
				state.message = action.payload
			})
	},
})
//exports
export const { reset } = authSlice.actions
export default authSlice.reducer
