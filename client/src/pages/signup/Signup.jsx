import signup from "../signup/Signup.module.scss"
import logo from "../../images/logo-red.svg"
import { Link } from "react-router-dom"

const Signup = () => {
	return (
		<section>
			<div className={signup.split}>
				<div className={signup.split_left}>
					<div className={signup.split_left_container}>
						<img src={logo} alt='' />
						<h1>Create Account</h1>
						<form>
							<div className={signup.form_group}>
								<input
									type='text'
									className='form-control'
									id='name'
									name='name'
									placeholder='Name'
								/>
							</div>
							<div className={signup.form_group}>
								<input
									type='text'
									className='form-control'
									id='email'
									name='email'
									placeholder='Email'
								/>
							</div>
							<div className={signup.form_group}>
								<input
									type='password'
									className='form-control'
									id='password'
									name='password'
									placeholder='Password'
								/>
							</div>
							<div className={signup.form_group}>
								<input
									type='password'
									className='form-control'
									id='password2'
									name='password2'
									placeholder='Confirm password'
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
