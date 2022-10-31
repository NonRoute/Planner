import { useState } from "react"
import Day from "./Day"
import DayField from "./DayFields"
import styles from "./Planner.module.css"
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr"

const Planner = () => {
	const [plans, setPlans] = useState([
		{ date: 1, task: ["task01", "task02", "task03", "task04"] },
		{ date: 2, task: ["task01", "task02", "task03", "task04"] },
		{ date: 3, task: ["task01", "task02", "task03", "task04"] },
		{ date: 4, task: ["task01", "task02", "task03", "task04"] },
		{ date: 5, task: ["task01", "task02", "task03", "task04"] },
		{ date: 6, task: ["task01", "task02", "task03", "task04"] },
		{ date: 7, task: ["task01", "task02", "task03", "task04"] },
	])

	const [beginDate, setBeginDate] = useState(1)

	const moveToPrevWeek = () => {
		setBeginDate((prev) => (prev === 1 ? prev : prev - 7))
	}

	const moveToNextWeek = () => {
		setBeginDate((prev) => prev + 7)
	}

	return (
		<div className={styles.background}>
			<div className={styles.header}>
				<h1 className={styles.planner}>Planner</h1>
				<button className={styles.button} onClick={moveToPrevWeek}>
					<GrFormPreviousLink />
				</button>
				<button className={styles.button} onClick={moveToNextWeek}>
					<GrFormNextLink />
				</button>
			</div>
			<div className={styles.week}>
				<DayField />
				{plans.map((plan, index) => (
					<Day key={index} date={beginDate + index} />
				))}
			</div>
		</div>
	)
}

export default Planner
