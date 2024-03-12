import { Trash } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { decrement, increment, removeItem } from '../../store/slices/cart-slice'
import { ICart } from '../../types/cart.type'
import styles from './cart-item.module.scss'

export const CartItem = ({ cart }: { cart: ICart }) => {
	const dispatch = useDispatch()

	return (
		<div style={{ borderBottom: '1px solid gray', padding: 10 }}>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div
					style={{
						display: 'flex',
						gap: 10,
						alignItems: 'center'
					}}
				>
					<img src={cart.image} width={70} height={70} />
					<span style={{ fontSize: 20, fontWeight: 700 }}>{cart.title}</span>
				</div>
				<p style={{ width: '150px' }}>{cart.description}</p>
			</div>
			<div
				style={{
					display: 'flex',
					gap: 10,
					alignItems: 'center'
				}}
			>
				<button
					className={styles.minus}
					onClick={() => dispatch(decrement(cart.id))}
				>
					-
				</button>
				<span>кол-во: {cart.count}</span>
				<button
					className={styles.plus}
					onClick={() => dispatch(increment(cart.id))}
				>
					+
				</button>
				<p>Цена: {cart.price * cart.count} $</p>
				<div>
					<Trash
						className={styles.trash}
						onClick={() => dispatch(removeItem(cart.id))}
					/>
				</div>
			</div>
		</div>
	)
}
