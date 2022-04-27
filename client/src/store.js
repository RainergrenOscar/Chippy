// REDUX
import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./redux/auth/authSlice"

// Create redux store
const store = configureStore({
	reducer: {
		auth: authReducer,
	},
})
// Export store
export default store
