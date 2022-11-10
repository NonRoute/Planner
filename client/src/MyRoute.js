import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Edit from "./components/Edit"
import Admin from "./components/Admin"
import Search from "./components/Search"

const MyRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<App />} />
				<Route path="/search" exact element={<Search />} />
				<Route path="/edit" exact element={<Edit />} />
				<Route path="/admin" exact element={<Admin />} />
			</Routes>
		</BrowserRouter>
	)
}

export default MyRoute