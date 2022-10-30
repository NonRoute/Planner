import styles from "./DayFields.module.css"

const DayField = (props) => {
	return (
		<div className={styles.day}>
			<h1 className={styles.date}>Date</h1>
			<div className={styles.task}>
				<p className={styles.taskName}>Morning</p>
			</div>
			<div className={styles.task}>
				<p className={styles.taskName}>Afternoon</p>
			</div>
			<div className={styles.task}>
				<p className={styles.taskName}>Evening</p>
			</div>
			<div className={styles.task}>
				<p className={styles.taskName}>Night</p>
			</div>
		</div>
	)
}

export default DayField
