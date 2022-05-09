// REDUX
import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./redux/auth/authSlice"
import quoteReducer from "./redux/quotes/quoteSlice"

// Create redux store
const store = configureStore({
	reducer: {
		auth: authReducer,
		quotes: quoteReducer,
	},
})
// Export store
export default store
