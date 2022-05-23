import Navbar from "../../components/navbar/Navbar"

import style from "./Layout.module.scss"

//Layout that makes the sidebar responsive for all pages that is wrapped in Layout
const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className={style.wrapper}>{children}</div>
		</>
	)
}

export default Layout
