import { useState } from "react"
import Day from "./Day"
import styles from "./Planner.module.css"

const Planner = () => {
	const [plans, setPlans] = useState()

	return (
		<div className={styles.background}>
			<h1 className={styles.h1}>Planner</h1>
			<div className={styles.week}>
				<Day date="1" />
				<Day date="2" />
				<Day date="3" />
				<Day date="4" />
				<Day date="5" />
				<Day date="6" />
				<Day date="7" />
			</div>
		</div>
	)
}

export default Planner
