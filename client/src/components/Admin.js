import Navbar from "./Navbar"
import styles from "./Edit.module.css"
import axios from "axios"

const Admin = () => {
	const handleDelete = () => {
		if (window.confirm("Confirm Delete?")) {
			axios
			.delete(`${process.env.REACT_APP_API}/deleteAllPlans/`, {
			})
			.then((response) => {
				alert("Deleted success")
			})
			.catch((err) => console.log(err))
		}
	}

	return (
		<div>
			<Navbar />
			<div className={styles.box}>
				<button className={styles.deleteBtn} onClick={handleDelete}>
					Delete all data
				</button>
			</div>
		</div>
	)
}

export default Admin
