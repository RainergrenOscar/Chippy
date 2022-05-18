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
import Layout from "./pages/layout/Layout"
import Myposts from "./pages/myposts/Myposts"
import Profile from "./pages/profile/Profile"

// Redux
import { Provider } from "react-redux"
import store from "./store"

function App() {
	return (
		<>
			<Provider store={store}>
				<Router>
					<div className='test'>
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
							<Route
								path='/myposts'
								element={
									<>
										<Layout>
											<Myposts />
										</Layout>
									</>
								}
							/>
							<Route
								path='/profile'
								element={
									<>
										<Layout>
											<Profile />
										</Layout>
									</>
								}
							/>
							<Route path='/login' element={<Login />} />
							<Route path='/signup' element={<Signup />} />
						</Routes>
					</div>
				</Router>
				<ToastContainer />
			</Provider>
		</>
	)
}

export default App
