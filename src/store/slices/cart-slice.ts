import { createSlice } from '@reduxjs/toolkit'
import { ICart } from '../../types/cart.type'

export interface CartState {
	carts: ICart[]
	totalPrice: number
}

const initialState: CartState = {
	carts: [],
	totalPrice: 0
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setMyArray: (state, action) => {
			state.carts.push(action.payload)
		},
		addItem: (state, action) => {
			const existingItem = state.carts.find(
				item => item.id === action.payload.id
			)

			if (existingItem) {
				existingItem.count++
			} else {
				state.carts.push({
					...action.payload,
					count: 1
				})
			}
		},
		removeItem: (state, action) => {
			state.carts = state.carts.filter(item => item.id !== action.payload)
		},
		increment: (state, action) => {
			const findItem = state.carts.find(item => item.id === action.payload)

			if (findItem) {
				findItem.count > 9 ? 10 : findItem.count++
			}
		},
		decrement: (state, action) => {
			const findItem = state.carts.find(item => item.id === action.payload)

			if (findItem) {
				findItem.count > 1 ? findItem.count-- : 1
			}

			// return state
		}
	}
})
// Action creators are generated for each case reducer function
export const { increment, decrement, setMyArray, addItem, removeItem } =
	cartSlice.actions

export default cartSlice.reducer
