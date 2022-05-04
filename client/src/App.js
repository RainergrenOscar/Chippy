// Styles
import "./styles/App.scss"
import "./styles/Reset.scss"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Pages & components
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import Signup from "./pages/signup/Signup"
import Navbar from "./components/navbar/Navbar"

// Redux
import { Provider } from "react-redux"

import store from "./store"
import Layout from "./pages/layout/Layout"

function App() {
	return (
		<>
			<Provider store={store}>
				<Router>
					<Routes>
						<Route
							path='/'
							element={
								<>
									<Layout>
										<Home />
									</Layout>
								</>
							}
						/>
						<Route path='/login' element={<Login />} />
						<Route path='/signup' element={<Signup />} />
					</Routes>
				</Router>
				<ToastContainer />
			</Provider>
		</>
	)
}

export default App
