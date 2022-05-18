import Navbar from "../../components/navbar/Navbar"

import style from "./Layout.module.scss"

//Makes the sidebar not overlapping the page
const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className={style.wrapper}>{children}</div>
		</>
	)
}

export default Layout
