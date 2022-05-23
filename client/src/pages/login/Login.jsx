import React, { useState, useEffect } from "react"
import login from "../login/Login.module.scss"
import logo from "../../images/logo-blue.svg"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

// Redux
import { useSelector, useDispatch } from "react-redux"
import { loginUser, reset } from "../../redux/auth/authSlice"

const Login = () => {
	const navigate = useNavigate()
	// useState hook with the values from the form
	const [signupForm, setSignupForm] = useState({
		email: "",
		password: "",
	})
	// Destructure form
	const { email, password } = signupForm

	// Redux dispatch initalize so we can call it
	const dispatch = useDispatch()

	//Extract data from the Redux store state
	const { user, isLoading, isSuccess, message, isError } = useSelector(
		(state) => state.auth
	)

	//Login user and catch errors
	useEffect(() => {
		// If there is an error send a toast with the error message
		if (isError) {
			toast.error(message)
		}
		// Redirect user if success
		if (isSuccess || user) {
			navigate("/")
		}

		dispatch(reset())
	}, [isSuccess, user, navigate, dispatch, isError])

	//Function that sets the signupForm state to the value of the input
	const onChange = (e) => {
		setSignupForm((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	// Function that submits the form
	const submitForm = (e) => {
		e.preventDefault()

		// deconstruct user and dispatch loginUser with the userData values.
		const userData = {
			email,
			password,
		}
		dispatch(loginUser(userData))
	}

	return (
		<section>
			<div className={login.split}>
				<div className={login.split_right}>
					<div className={login.split_right_container}>
						<div className={login.split_right_container_split}>
							<span>Quote of the day</span>
							<h5>chippy.</h5>
						</div>
						<div className={login.split_right_container_quote}>
							<h1>Creativity is intelligence having fun.</h1>
							<h3>- Albert Einstein</h3>
							<p>
								Albert Einstein was a German mathematician and
								physicist who developed the special and general
								theories of relativity. In 1921, he won the
								Nobel Prize for physics for his explanation of
								the photoelectric effect.
							</p>
						</div>
					</div>
				</div>
				<div className={login.split_left}>
					<div className={login.split_left_container}>
						<img src={logo} alt='' />
						<h1>Welcome back!</h1>
						<form onSubmit={submitForm}>
							<div className={login.form_group}>
								<input
									type='text'
									className='form-control'
									id='email'
									name='email'
									value={email}
									placeholder='Email'
									onChange={onChange}
									required
								/>
							</div>
							<div className={login.form_group}>
								<input
									type='password'
									className='form-control'
									id='password'
									name='password'
									value={password}
									placeholder='Password'
									onChange={onChange}
									required
								/>
							</div>
							<div className={login.form_group}>
								<button>LOGIN</button>
							</div>
							<div className={login.form_group}>
								<p>
									Don't have an account yet?{" "}
									<Link to='/signup'>
										<span>Sign up</span>
									</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login
