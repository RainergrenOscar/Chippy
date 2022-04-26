import React from "react"
import login from "../login/Login.module.scss"
import logo from "../../images/logo-blue.svg"
import { Link } from "react-router-dom"

const Login = () => {
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
						<form>
							<div className={login.form_group}>
								<input
									type='text'
									className='form-control'
									id='name'
									name='name'
									placeholder='Name'
								/>
							</div>
							<div className={login.form_group}>
								<input
									type='password'
									className='form-control'
									id='password'
									name='password'
									placeholder='Password'
								/>
							</div>

							<div className={login.form_group}>
								<button>SIGN UP</button>
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
