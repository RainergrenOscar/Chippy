import React from "react"
import style from "../navbar/Navbar.module.scss"
import logo from "../../images/Logo-nav.svg"
import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<nav className={style.navbar_container}>
			<div className={style.navbar_container_logo}>
				<Link to='/'>
					<img src={logo} alt='' />
				</Link>
			</div>
			<div className={style.navbar_container_links}>
				<ul>
					<li>Popular</li>
				</ul>
				<ul>
					<li>Liked quotes</li>
				</ul>
				<ul>
					<li>Editor</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
