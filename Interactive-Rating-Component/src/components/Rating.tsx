import styles from './Rating.module.scss'
import { useState } from 'react'

export function Rating() {
	const [selectRating, setSelectRating] = useState<number>()

	const ratingClick = (rating: number) => {
		setSelectRating(rating)
	}
	return (
		<div className={styles.panel}>
			<img
				className={styles.icon}
				src='src/assets/images/icon-star.svg'
				alt='Star Icon'
			/>
			<h1 className={styles.heading}>How did we do?</h1>
			<p className={styles.paragraph}>
				Please let us know how we did with your support request. All feedback is
				appreciated to help us improve our offering!
			</p>
			<div>
				{[1, 2, 3, 4, 5].map(rating => (
					<button onClick={() => ratingClick(rating)}>{rating}</button>
				))}
			</div>

			<button className={styles.button}>Submit</button>
		</div>
	)
}
