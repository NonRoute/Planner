import Navbar from "./Navbar"
import styles from "./Edit.module.css"

const Edit = () => {
	return (
		<div>
			<Navbar />
			<form>
				<h1>Edit task</h1>
				<div className={styles.fromGroup}>
					<label>Select day</label>
					<input type="number" />
				</div>
				<div className={styles.fromGroup}>
					<label>Select time</label>
					<select>
						<option>Morning</option>
						<option>Afternoon</option>
						<option>Evening</option>
						<option>Night</option>
					</select>
				</div>
				<div className={styles.fromGroup}>
					<label>Task name</label>
					<input type="text" />
				</div>
				<div className={styles.submit}>
					<input type="Submit" value="submit" />
				</div>
			</form>
		</div>
	)
}

export default Edit
