import React, { useEffect } from "react"
import style from "./Card.module.scss"
import logo from "../../images/logo-white.svg"
import { BsFillPencilFill } from "react-icons/bs"
import { AiFillDelete } from "react-icons/ai"

import { useSelector, useDispatch } from "react-redux"
import { deleteQuote } from "../../redux/quotes/quoteSlice"

const Card = ({ quote, user, callBack }) => {
	const dispatch = useDispatch()

	//Access the redux qoute state
	const { quotes, quoteId } = useSelector((state) => state.quotes)

	/**
	 * @async
	 * @param {String} id
	 * @returns Deletes a object with the same "id"
	 */
	const onDeleteUser = async (id) => {
		if (window.confirm("Are you sure?")) {
			dispatch(deleteQuote(id))
			window.location.reload(false)
		}
	}

	return (
		<>
			{user && user.name === quote.user.name && (
				<div className={style.container}>
					<div className={style.container_background}>
						<div className={style.container_split}>
							<div className={style.container_split_left}>
								<img src={logo} alt='' />
							</div>

							<div className={style.container_split_right}>
								{new Date(quote.date).toLocaleString("en-US")}
							</div>
						</div>
						<div className={style.container_background_quote}>
							<div className={style.overflow}>
								<h1>{quote.quote}.</h1>
							</div>
							<div className={style.line}></div>
							<p>{quote.author}</p>
						</div>
					</div>
					<div className={style.container_likes}>
						<div className={style.container_likes_left}>
							<h1>{quote.user.name}</h1>
						</div>
						<div className={style.container_likes_right}>
							{/* If user is logged in show these compononets */}
							{user && user.name === quote.user.name && (
								<>
									<div
										className={
											style.container_likes_right_like
										}
									>
										<button>
											{" "}
											<BsFillPencilFill
												className={style.pencil}
												onClick={() =>
													callBack(
														quote.quote,
														quote.author,
														quote._id
													)
												}
											/>
										</button>
									</div>
									<div
										className={
											style.container_likes_right_like
										}
									>
										<button
											onClick={() =>
												onDeleteUser(quote._id)
											}
										>
											<AiFillDelete
												className={style.delete}
											/>
										</button>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Card
