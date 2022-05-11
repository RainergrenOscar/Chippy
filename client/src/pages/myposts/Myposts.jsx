import style from "./Myposts.module.scss"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import Card from "../../components/card/Card"
import { reset, getQuotes } from "../../redux/quotes/quoteSlice"

const Myposts = () => {
	return (
		<section className={style.container}>
			<div className={style.header}>
				<h1>My posts</h1>
			</div>
		</section>
	)
}

export default Myposts
