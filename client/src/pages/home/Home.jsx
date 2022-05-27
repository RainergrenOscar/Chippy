import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import style from "./Home.module.scss"
import Card from "../../components/card/Card"
import {
	createQuote,
	reset,
	getQuotes,
	updateQuote,
} from "../../redux/quotes/quoteSlice"
import { FiSearch } from "react-icons/fi"
import { toast } from "react-toastify"
import Modal from "../../components/modal/Modal"

const Home = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	// Redux get the authorization state and quote state
	const { user } = useSelector((state) => state.auth)
	const { quotes, isError, isSuccess, message } = useSelector(
		(state) => state.quotes
	)

	//All states
	const [quote, setQuote] = useState("")
	const [author, setAuthor] = useState("")
	const [cardId, setCardId] = useState("")
	const [search, setSearch] = useState("")

	/**
	 * Checks if user us logged in on first render
	 * @returns if user is not logged in, redirect to login page
	 * @returns if user is logged in, dispatch getQuotes to show all current posts
	 */
	useEffect(() => {
		if (!user) {
			navigate("/login")
		} else {
			dispatch(getQuotes())
		}
	}, [dispatch])

	/**
	 * Checks if there is any error or succes on render
	 * If its succesfull dispatch reset that resets the redux state
	 * If its error, send error message to user
	 */
	useEffect(() => {
		if (isError) {
			toast.error(message)
		}
		if (isSuccess) {
			dispatch(reset)
		}
		dispatch(reset)
	}, [isError, isSuccess, dispatch, message])

	/**
	 * Submit function
	 * @param {String} e
	 */
	const submit = (e) => {
		e.preventDefault()
		//If author or quote is not filled in, send an error message
		if (!author || !quote) {
			toast.error("All fields are required")
		}
		//Dispatch the createQuote Slice with the quote and quthor data.
		else if (!cardId) {
			dispatch(createQuote({ quote, author }))
			window.location.reload(false)
			//Dispatch the updateQuote with the updated data
		} else {
			dispatch(updateQuote({ quote, author, cardId }))
			window.location.reload(false)
		}
	}

	/**
	 * Searchbar
	 */
	const filteredQuotes = quotes.filter((quote) => {
		return (
			quote.user.name.toLowerCase().includes(search.toLowerCase()) ||
			quote.quote.toLowerCase().includes(search.toLowerCase()) ||
			quote.author.toLowerCase().includes(search.toLowerCase())
		)
	})

	/**
	 * Callback function
	 * @param {String} quote
	 * @param {String} author
	 * @param {String} uuid
	 * @returns updated redux state and card
	 */
	const callBack = (quote, author, uuid) => {
		window.scrollTo(0, 0)
		setQuote(quote)
		setAuthor(author)
		setCardId(uuid)
	}

	return (
		<section className={style.container}>
			<div className={style.header}>
				<h1>Home</h1>
				<div className={style.header_search}>
					<FiSearch />
					<input
						type='text'
						placeholder='Search on Chippy'
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
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
									placeholder='Knowing is better than learning'
									value={quote}
									onChange={(e) => setQuote(e.target.value)}
								/>
							</div>
							<div className={style.form_group}>
								<input
									type='text'
									name='author'
									id='author'
									className='form-control'
									placeholder='- Dj Khaled'
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
				{filteredQuotes.map((quote) => (
					<Card
						callBack={callBack}
						key={quote._id}
						quote={quote}
						user={user}
					/>
				))}
			</section>
		</section>
	)
}

export default Home
