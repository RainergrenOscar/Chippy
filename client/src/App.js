import "./styles/App.scss"
import "./styles/Reset.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import Signup from "./pages/signup/Signup"
import Navbar from "./components/navbar/Navbar"

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
