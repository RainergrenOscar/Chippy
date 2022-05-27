import style from "./Modal.module.scss"
import meme from "../../images/logout.jpeg"

const Modal = () => {
	/*THIS COMPONENT IS NOT BEING USED */
	return (
		<div className={style.modal}>
			<div className={style.modal_content}>
				<img src={meme} alt='' />
				<div className={style.modal_content_button}>
					<button>Take me back!</button>
					<button>Sign Out</button>
				</div>
			</div>
		</div>
	)
}

export default Modal
