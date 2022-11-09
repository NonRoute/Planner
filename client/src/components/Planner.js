import { useState, useEffect } from "react"
import Day from "./Day"
import DayField from "./DayFields"
import styles from "./Planner.module.css"
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr"
import axios from "axios"

const Planner = () => {
	const [plans, setPlans] = useState([
		{ day: 1, tasks: Array(4) },
		{ day: 2, tasks: Array(4) },
		{ day: 3, tasks: Array(4) },
		{ day: 4, tasks: Array(4) },
		{ day: 5, tasks: Array(4) },
		{ day: 6, tasks: Array(4) },
		{ day: 7, tasks: Array(4) },
	])

	const [beginDate, setBeginDate] = useState(1)

	const fetchData = () => {
		axios
			.get(`${process.env.REACT_APP_API}/plan/${beginDate}`)
			.then((response) => {
				console.log(response.data)
				setPlans(response.data)
			})
			.catch((err) => alert(err))
	}

	useEffect(() => {
		fetchData()
	}, [beginDate])

	const moveToPrevWeek = () => {
		setBeginDate((prev) => (prev <= 7 ? 1 : prev - 7))
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
					<Day key={index} date={plan.day} tasks={plan.tasks}/>
				))}
			</div>
		</div>
	)
}

export default Planner
