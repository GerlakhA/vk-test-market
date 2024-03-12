import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import { Cart } from '../components/cart'

export const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<App />} path='/' />
				<Route element={<Cart />} path='/cart' />
				<Route element={<h1>404 Not Found 😔</h1>} path='*' />
			</Routes>
		</BrowserRouter>
	)
}
