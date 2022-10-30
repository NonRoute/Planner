import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"

const MyRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<App />} />
			</Routes>
		</BrowserRouter>
	)
}

export default MyRoute