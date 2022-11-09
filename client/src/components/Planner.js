import { useState, useEffect } from "react"
import Day from "./Day"
import DayField from "./DayFields"
import styles from "./Planner.module.css"
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr"
import { AiOutlineSearch } from "react-icons/ai"
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
	const [day, setDay] = useState(1)

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
		// eslint-disable-next-line
	}, [beginDate])

	const moveToPrevWeek = () => {
		setBeginDate((prev) => (prev <= 7 ? 1 : prev - 7))
	}

	const moveToNextWeek = () => {
		setBeginDate((prev) => prev + 7)
	}

	const searchDay = () => {
		if (day < 1) {
			alert("Day must be positive")
		} else if (day >= 1000000) {
			alert("Day is too large")
		} else {
			setBeginDate(day)
		}
	}

	return (
		<div className={styles.background}>
			<div className={styles.header}>
				<h1 className={styles.planner}>Planner</h1>
				<input
					className={styles.input}
					type="number"
					min="1"
					value={day}
					onChange={(e) => setDay(e.target.value)}
					placeholder="Day"
				/>
				<button className={styles.button} onClick={searchDay}>
					<AiOutlineSearch />
				</button>
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
					<Day key={index} date={plan.day} tasks={plan.tasks} />
				))}
			</div>
		</div>
	)
}

export default Planner
