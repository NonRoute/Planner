import styles from "./Planner.module.css"
import Day from "./Day"
import DayField from "./DayFields"
import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import axios from "axios"
import Navbar from "./Navbar"

const Search = () => {
	const [plans, setPlans] = useState([])
	const [searchText, setSearchText] = useState()

	const fetchData = () => {
		let days = []
		setPlans([])
		axios
			.get(`${process.env.REACT_APP_API}/days/${searchText}`)
			.then((response) => {
				days = response.data[0].day
				return days.forEach((day) => {
					axios
						.get(`${process.env.REACT_APP_API}/tasksAt/${day}`)
						.then((response) => {
							setPlans((prev) => [...prev, response.data[0]])
						})
						.catch((err) => alert(err))
				})
			})
			.catch(() => alert("No result"))
	}

	const search = () => {
		fetchData()
	}

	return (
		<div>
			<Navbar />
			<div className={styles.background}>
				<div className={styles.header}>
					<h1 className={styles.planner}>Planner</h1>
					<input
						className={styles.input}
						type="text"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
						placeholder="Search"
					/>
					<button className={styles.button} onClick={search}>
						<AiOutlineSearch />
					</button>
				</div>
				<div className={styles.week}>
					<DayField />
					{plans
						.sort((a, b) => a.day - b.day)
						.map((plan, index) => (
							<Day
								key={index}
								date={plan.day}
								tasks={plan.tasks}
							/>
						))}
				</div>
			</div>
		</div>
	)
}

export default Search
