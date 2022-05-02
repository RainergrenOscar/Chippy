import React from "react"
import style from "../navbar/Navbar.module.scss"
import logo from "../../images/Logo-nav.svg"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logoutUser, reset } from "../../redux/auth/authSlice"

const Navbar = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { user } = useSelector((state) => state.auth)

	const onLogout = () => {
		dispatch(logoutUser())
		dispatch(reset())
		navigate("/login")
	}

	return (
		<nav className={style.navbar_container}>
			<div className={style.navbar_container_logo}>
				<Link to='/'>
					<img src={logo} alt='' />
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
