import Navbar from "./Navbar"
import styles from "./Edit.module.css"
import { useState, useEffect } from "react"
import axios from "axios"

const Edit = () => {
	const [state, setState] = useState({
		day: "1",
		time: "Morning",
		task: "",
	})
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		axios
			.get(`${process.env.REACT_APP_API}/taskAt/${state.day || "1"}/${state.time}`)
			.then((response) => {
				const { task } = response.data
				setState({ ...state, task})
			})
			.catch((err) => alert(err))
			.finally(() => setIsLoading(false))
	}, [state.day, state.time])

	const inputValue = (name) => (event) => {
		setState({ ...state, [name]: event.target.value })
	}

	return (
		<div>
			<Navbar />
			<form>
				<h1>Edit task</h1>
				<div className={styles.fromGroup}>
					<label>Select day</label>
					<input type="number" readOnly={isLoading} onChange={inputValue("day")} value={state.day}/>
				</div>
				<div className={styles.fromGroup}>
					<label>Select time</label>
					<select readOnly={isLoading} onChange={inputValue("time")} value={state.time}>
						<option>Morning</option>
						<option>Afternoon</option>
						<option>Evening</option>
						<option>Night</option>
					</select>
				</div>
				<div className={styles.fromGroup}>
					<label>Task name</label>
					<input type="text" readOnly={isLoading} onChange={inputValue("task")} value={state.task} />
				</div>
				<div className={styles.submit}>
					<input type="Submit" value="submit" />
				</div>
			</form>
		</div>
	)
}

export default Edit
