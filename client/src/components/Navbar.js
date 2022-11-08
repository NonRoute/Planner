import { Link, useNavigate } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
	const navigate = useNavigate()
	return (
		<nav>
			<ul>
				<li>
					<Link to="/" className={styles.NavLink}>Home</Link>
                    <Link to="/edit" className={styles.NavLink}>Edit</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar