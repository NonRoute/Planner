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
			.get(
				`${process.env.REACT_APP_API}/taskAt/${state.day || "0"}/${
					state.time
				}`
			)
			.then((response) => {
				const { task } = response.data
				setState({ ...state, task })
			})
			.catch((err) => alert(err))
			.finally(() => setIsLoading(false))
			// eslint-disable-next-line
	}, [state.day, state.time])

	const inputValue = (name) => (event) => {
		setState({ ...state, [name]: event.target.value })
	}

	const submitForm = (e) => {
		e.preventDefault()
		axios
			.put(
				`${process.env.REACT_APP_API}/task/${state.day || "0"}/${
					state.time
				}`,
				{
					task: state.task,
				}
			)
			.then((response) => {
				alert("Edit success")
			})
			.catch((err) => {
				alert(err)
			})
	}

	return (
		<div>
			<Navbar />
			<form onSubmit={submitForm}>
				<h1>Edit task</h1>
				<div className={styles.fromGroup}>
					<label>Select day</label>
					<input
						type="number"
						readOnly={isLoading}
						onChange={inputValue("day")}
						value={state.day}
						min="1"
					/>
				</div>
				<div className={styles.fromGroup}>
					<label>Select time</label>
					<select
						readOnly={isLoading}
						onChange={inputValue("time")}
						value={state.time}
					>
						<option>Morning</option>
						<option>Afternoon</option>
						<option>Evening</option>
						<option>Night</option>
					</select>
				</div>
				<div className={styles.fromGroup}>
					<label>Edit task</label>
					<input
						type="text"
						readOnly={isLoading}
						onChange={inputValue("task")}
						value={state.task}
					/>
				</div>
				<div className={styles.submit}>
					<input type="Submit" value="Submit" className={styles.submitBtn}/>
				</div>
			</form>
		</div>
	)
}

export default Edit
