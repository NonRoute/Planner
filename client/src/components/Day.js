import { useState } from "react"
import styles from "./Day.module.css"

const Day = (props) => {
	return (
		<div className={styles.day}>
			<h1 className={styles.date}>{props.date}</h1>
			<div className={styles.task}>
				<p className={styles.taskName}>Task01</p>
			</div>
			<div className={styles.task}>
				<p className={styles.taskName}>Task02</p>
			</div>
			<div className={styles.task}>
				<p className={styles.taskName}>Task03</p>
			</div>
			<div className={styles.task}>
				<p className={styles.taskName}>Task04</p>
			</div>
		</div>
	)
}

export default Day
