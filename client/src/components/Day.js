import { useState } from "react"
import styles from "./Day.module.css"

const Day = (props) => {
	return (
		<div className={styles.day}>
            <h1>{props.date}</h1>
			<p>Morning</p>
			<p>Afternoon</p>
			<p>Evening</p>
			<p>Night</p>
		</div>
	)
}

export default Day
