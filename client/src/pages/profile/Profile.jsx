import style from "./Profile.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import profile from "../../images/profile.png"
import { logoutUser, reset } from "../../redux/auth/authSlice"
import { toast } from "react-toastify"
import Modal from "../../components/modal/Modal"

const Profile = () => {
	//Get the user from auth
	const { user } = useSelector((state) => state.auth)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	// Checks if user is logged in otherwise navigates to login page
	useEffect(() => {
		if (!user) {
			navigate("/login")
		}
	}, [])

	// Function that logs out the user
	const onLogout = () => {
		dispatch(logoutUser())
		dispatch(reset())
		navigate("/login")
	}

	// Only for showing a message that this feature is not available
	const notDone = () => {
		toast.error("This feature is not available right now")
	}

	return (
		<section className={style.container}>
			<div className={style.header}>
				<h1>Profile</h1>
			</div>
			<div className={style.header_profile}>
				<div className={style.header_profile_picture}>
					<img src={profile} alt='Profile picture' />

					<div>
						<p>{user.name}</p>
						<p>{user.email}</p>
					</div>
				</div>
				<div className={style.header_profile_input}>
					<div className={style.inputgroup}>
						<label htmlFor='name'>Name*</label>
						<input type='text' placeholder={user.name} disabled />
					</div>
					<div className={style.inputgroup}>
						<label htmlFor='email'>Email*</label>
						<input type='text' placeholder={user.email} disabled />
					</div>
					<div className={style.inputgroup}>
						<label htmlFor='name'>Password*</label>
						<input
							type='password'
							placeholder='*********'
							disabled
						/>
					</div>
					<div className={style.inputgroup}>
						<label htmlFor='name'>Country</label>
						<input type='text' placeholder='Sweden' disabled />
					</div>
					<div className={style.inputgroup}>
						<label htmlFor='name'>City</label>
						<input type='text' placeholder='Stockholm' disabled />
					</div>
				</div>
				<div className={style.header_profile_button}>
					<button onClick={notDone}>Update user</button>
					<button onClick={onLogout}>Sign Out</button>
				</div>
			</div>
		</section>
	)
}

export default Profile
