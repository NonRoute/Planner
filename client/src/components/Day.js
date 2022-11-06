import { useState } from "react"
import styles from "./Day.module.css"

const Day = (props) => {
	return (
		<div className={styles.day}>
			<h1 className={styles.date}>{props.date}</h1>
			<div className={styles.task}>
				<p className={styles.taskName}>{props.tasks[0]}</p>
			</div>
			<div className={styles.task}>
				<p className={styles.taskName}>{props.tasks[1]}</p>
			</div>
			<div className={styles.task}>
				<p className={styles.taskName}>{props.tasks[2]}</p>
			</div>
			<div className={styles.task}>
				<p className={styles.taskName}>{props.tasks[3]}</p>
			</div>
		</div>
	)
}

export default Day
