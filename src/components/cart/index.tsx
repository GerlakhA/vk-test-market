import { Placeholder } from '@vkontakte/vkui'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../store/store'
import { CartItem } from './CartItem'
import styles from './cart-item.module.scss'

export const Cart = () => {
	const cart = useSelector((state: RootState) => state.cart.carts)

	const totalPrice = cart.reduce(
		(acc, item) => item.count * item.price + acc,
		0
	)

	return (
		<>
			<Link
				to={'/'}
				style={{
					position: 'fixed',
					backgroundColor: '#19191A',
					width: '100%',
					padding: 10
				}}
			>
				Перейти на главную
			</Link>
			<div className={styles.container}>
				<div>
					{cart?.length ? (
						cart?.map(item => <CartItem key={item.id} cart={item} />)
					) : (
						<Placeholder
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								width: '100%'
							}}
						>
							В корзине нет товаров, пожалуйста перейдите на главную страницу и
							нажмите на кнопку(в корзину).
						</Placeholder>
					)}
				</div>
				<div className={styles.column2}>
					<span>Итоговая сумма: </span>
					<p>{totalPrice} $</p>
				</div>
			</div>
		</>
	)
}
