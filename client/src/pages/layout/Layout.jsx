import Navbar from "../../components/navbar/Navbar"

import Home from "../home/Home"
import style from "./Layout.module.scss"

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className={style.wrapper}>{children}</div>
		</>
	)
}

export default Layout
