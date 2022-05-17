import Navbar from "../../components/navbar/Navbar"

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
