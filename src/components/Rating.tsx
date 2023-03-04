import styles from './Rating.module.scss'
import RatingStar from '/images/icon-star.svg'
import Illustration from '/images/illustration-thank-you.svg'
import React, { useState } from 'react'

export function Rating() {
	const [selectRating, setSelectRating] = useState<number>()
	const [isSubmitted, setIsSubmitted] = useState(false)

	function ratingClick(rating: number) {
		setSelectRating(rating)
	}

	function submitFormClick(event: React.FormEvent) {
		event.preventDefault()
		setIsSubmitted(true)
	}
	return isSubmitted ? (
		// Thank You window
		<div className={`${styles.panel} ${styles.center}`}>
			<img
				//TODO: Add styles for illustration
				src={Illustration}
				alt='Star Icon'
			/>
			<p className={styles.rating_score}>
				You selected {selectRating} out of 5
			</p>
			<h1 className={styles.heading}>Thank You!</h1>
			<p className={styles.paragraph}>
				We appreciate you taking the time to give a rating. If you ever need
				more support, don’t hesitate to get in touch!
			</p>
		</div>
	) : (
		// Form Rating window
		<form onSubmit={submitFormClick} className={styles.panel}>
			<img className={styles.icon} src={RatingStar} alt='Star Icon' />
			<h1 className={styles.heading}>How did we do?</h1>
			<p className={styles.paragraph}>
				Please let us know how we did with your support request. All feedback is
				appreciated to help us improve our offering!
			</p>
			<div className={styles.rating}>
				{[1, 2, 3, 4, 5].map(rating => (
					<button
						onClick={() => ratingClick(rating)}
						type='button'
						className={styles.rating_element}
					>
						{rating}
					</button>
				))}
			</div>

			<button
				disabled={selectRating === undefined}
				type='submit'
				className={styles.submit}
			>
				Submit
			</button>
		</form>
	)
}
