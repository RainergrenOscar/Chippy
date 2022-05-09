import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import style from "./Home.module.scss"
import Card from "../../components/card/Card"
import { toast } from "react-toastify"
import { createQuote, reset, getQuotes } from "../../redux/quotes/quoteSlice"
import { useParams } from "react-router-dom"

const Home = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	// Redux get the authorization state and quote state
	const { user } = useSelector((state) => state.auth)
	const { quotes, isError, isSuccess, message } = useSelector(
		(state) => state.quotes
	)

	const [quote, seQuote] = useState("")
	const [author, setAuthor] = useState("")

	// Check if user is logged in, otherwise navigate back to login
	useEffect(() => {
		if (!user) {
			navigate("/login")
		} else {
			dispatch(getQuotes())
		}
	}, [dispatch])

	useEffect(() => {
		if (isError) {
			toast.error(message)
		}
		if (isSuccess) {
			dispatch(reset)
		}
		dispatch(reset)
	}, [isError, isSuccess, dispatch, message])

	const submit = (e) => {
		e.preventDefault()
		dispatch(createQuote({ quote, author }))
		window.location.reload(false)
	}
	return (
		<section className={style.container}>
			<div className={style.header}>
				<h1>Home</h1>
			</div>
			<section className={style.form}>
				<form onSubmit={submit}>
					<div className={style.grid}>
						<div>
							<div className={style.form_group}>
								<textarea
									type='text'
									name='quote'
									id='quote'
									className='form-control'
									placeholder='The difference between poor and rich, is money'
									value={quote}
									onChange={(e) => seQuote(e.target.value)}
								/>
							</div>
							<div className={style.form_group}>
								<input
									type='text'
									name='author'
									id='author'
									className='form-control'
									placeholder='Ben E. King'
									maxLength='25'
									value={author}
									onChange={(e) => setAuthor(e.target.value)}
								/>
							</div>
						</div>
						<div>
							<div className={style.form_group}>
								<button>Chirp</button>
							</div>
						</div>
					</div>
				</form>
			</section>
			<section className={style.card_grid}>
				{quotes.map((quote) => (
					<Card key={quote._id} quote={quote} user={user} />
				))}
			</section>
		</section>
	)
}

export default Home
