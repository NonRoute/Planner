import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/" className={styles.NavLink}>Home</Link>
					<Link to="/search" className={styles.NavLink}>Search</Link>
                    <Link to="/edit" className={styles.NavLink}>Edit</Link>
					<Link to="/admin" className={styles.NavLink}>Admin</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar