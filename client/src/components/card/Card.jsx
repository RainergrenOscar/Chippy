import React, { useEffect, useState } from "react"
import style from "./Card.module.scss"
import logo from "../../images/logo-white.svg"
import { BsFillPencilFill, BsFillHeartFill } from "react-icons/bs"
import { AiFillDelete } from "react-icons/ai"

import { useSelector, useDispatch } from "react-redux"
import { deleteQuote } from "../../redux/quotes/quoteSlice"

const Card = ({ quote, user, callBack }) => {
	const dispatch = useDispatch()
	const [isLiked, setIsLiked] = useState("false")

	// Delete function that only is available to logged in users with their posts
	const onDeleteUser = async (id) => {
		if (window.confirm("Are you sure?")) {
			dispatch(deleteQuote(id))
			window.location.reload(false)
		}
	}

	// Function that lets you like post
	// Not functional only for display for the moment....
	const likeUser = () => {
		setIsLiked(!isLiked)
	}

	return (
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
					{/* If user is logged in show the alternatives to remove posts and update */}
					{user && user.name === quote.user.name ? (
						<>
							<div className={style.container_likes_right_like}>
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
							<div className={style.container_likes_right_like}>
								<button onClick={() => onDeleteUser(quote._id)}>
									<AiFillDelete className={style.delete} />
								</button>
							</div>
						</>
					) : (
						// If its not the logged in users post, show option to like the post
						<>
							<div className={style.container_likes_right_like}>
								<button onClick={likeUser}>
									<BsFillHeartFill
										className={
											isLiked ? style.heart : style.heart2
										}
									/>
								</button>
								<p
									className={
										isLiked ? style.heart : style.heart2
									}
								>
									128
								</p>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Card
