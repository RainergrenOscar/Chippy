import signup from "../signup/Signup.module.scss"
import logo from "../../images/logo-red.svg"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

// Redux
import { useSelector, useDispatch } from "react-redux"
import { signupUser, reset } from "../../redux/auth/authSlice"

const Signup = () => {
	const navigate = useNavigate()

	// useState hook with the values from the form
	const [signupForm, setSignupForm] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	})

	// Redux dispatch initalize so we can call it
	const dispatch = useDispatch()

	//Extract data from the Redux store state
	const { user, isLoading, isSuccess, message, isError } = useSelector(
		(state) => state.auth
	)
	// Destructure form
	const { name, email, password, password2 } = signupForm

	/**
	 * Checks if there is any error or if the register is successfull.
	 */
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

	/**
	 * onChange function
	 * @param {String} e
	 * @returns updated state "signupForm"
	 * Takes in all the inputs from the form and updates the state to what the user has typed
	 */
	const onChange = (e) => {
		setSignupForm((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}
	/**
	 * submitForm function
	 * @param {String} e
	 * @returns UserData object
	 */
	const submitForm = (e) => {
		e.preventDefault()
		if (password !== password2) {
			toast.error("Password do not match")
		} else {
			// If password matches, create variable called userData and pass in the values from the input fields
			const userData = {
				name,
				email,
				password,
			}
			// Dispatch the redux register function with the userData value
			dispatch(signupUser(userData))
		}
	}

	return (
		<section>
			<div className={signup.split}>
				<div className={signup.split_left}>
					<div className={signup.split_left_container}>
						<img src={logo} alt='' />
						<h1>Create Account</h1>
						<form onSubmit={submitForm}>
							<div className={signup.form_group}>
								<input
									type='text'
									className='form-control'
									id='name'
									name='name'
									value={name}
									placeholder='Name'
									onChange={onChange}
									required
								/>
							</div>
							<div className={signup.form_group}>
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
							<div className={signup.form_group}>
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
							<div className={signup.form_group}>
								<input
									type='password'
									className='form-control'
									id='password2'
									name='password2'
									value={password2}
									placeholder='Confirm password'
									onChange={onChange}
									required
								/>
							</div>
							<div className={signup.form_group}>
								<button>SIGN UP</button>
							</div>
							<div className={signup.form_group}>
								<p>
									Already have an account?{" "}
									<Link to='/login'>
										<span>Sign in</span>
									</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
				<div className={signup.split_right}>
					<div className={signup.split_right_container}>
						<div className={signup.split_right_container_split}>
							<span>Quote of the day</span>
							<h5>chippy.</h5>
						</div>
						<div className={signup.split_right_container_quote}>
							<h1>Knowing is better than learning.</h1>
							<h3>- Dj Khaled</h3>
							<p>
								Dj Khaled was a German mathematician and
								physicist who developed the special and general
								theories of relativity. In 1921, he won the
								Nobel Prize for physics for his explanation of
								the photoelectric effect.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Signup
