import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Edit from "./components/Edit"

const MyRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<App />} />
				<Route path="/edit" exact element={<Edit />} />
			</Routes>
		</BrowserRouter>
	)
}

export default MyRoute