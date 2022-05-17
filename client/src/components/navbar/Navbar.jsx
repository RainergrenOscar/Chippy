import React from "react"
import style from "../navbar/Navbar.module.scss"
import logo from "../../images/logo-blue.svg"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logoutUser, reset } from "../../redux/auth/authSlice"
import { BsHouse, BsPerson, BsFileEarmark } from "react-icons/bs"

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
		<nav className={style.navbar}>
			<div className={style.navbar_container}>
				<div className={style.navbar_container_logo}>
					<NavLink to='/'>
						<img src={logo} alt='' style={{ width: "40px" }} />
						<h1>chippy.</h1>
					</NavLink>
				</div>

				<nav className={style.navbar_container_links}>
					<h1>Menu</h1>
					<ul className={style.navbar_container_links_item}>
						<li>
							<NavLink
								to='/'
								style={({ isActive }) => ({
									color: isActive ? "#39a0ff" : "#3e4a6b",
								})}
							>
								<BsHouse />
								<span>Dashboard</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/myposts'
								style={({ isActive }) => ({
									color: isActive ? "#39a0ff" : "#3e4a6b",
								})}
							>
								<BsFileEarmark />
								<span>My posts</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/profile'
								style={({ isActive }) => ({
									color: isActive ? "#39a0ff" : "#3e4a6b",
								})}
							>
								<BsPerson />
								<span>Profile</span>
							</NavLink>
						</li>
					</ul>
					<div className={style.navbar_container_links_bottom}>
						<p>Signed in as</p>
						<span>{user && user.name}</span>
						<button onClick={onLogout}>SIGN OUT</button>
					</div>
				</nav>
			</div>
		</nav>
	)
}

export default Navbar
