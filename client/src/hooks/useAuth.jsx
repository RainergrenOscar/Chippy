import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

/**
 * Custom Authorization Hook
 * @returns {loggedIn} Checks if user is true, and sets loggedIn to true or false
 * @returns {loading} Checks if the hook is being used and setting the loading state to true or false
 */
export const useAuth = () => {
	const [loggedIn, setLoggedIn] = useState(false)
	const [loading, setLoading] = useState(true)

	const { user } = useSelector((state) => state.auth)

	useEffect(() => {
		if (user) {
			setLoggedIn(true)
		} else {
			setLoggedIn(false)
		}
		setLoading(false)
	}, [user])
	return { loggedIn, loading }
}
