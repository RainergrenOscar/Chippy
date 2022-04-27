import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Home = () => {
	const navigate = useNavigate()
	const { user } = useSelector((state) => state.auth)

	// Check if user is logged in, otherwise navigate back to login
	useEffect(() => {
		if (!user) {
			navigate("/login")
		}
	}, [])
	return <div>Home</div>
}

export default Home
