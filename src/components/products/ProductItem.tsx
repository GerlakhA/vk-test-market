import { Card } from '@vkontakte/vkui'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/slices/cart-slice'
import { ICart } from '../../types/cart.type'

interface IProductItem {
	product: ICart
}

export const ProductItem = ({ product }: IProductItem) => {
	const dispatch = useDispatch()
	const onClickAdd = () => {
		const item = {
			id: product.id,
			price: product.price,
			image: product.image,
			count: product.count,
			description: product.description,
			title: product.title
		}
		dispatch(addItem(item))
	}
	return (
		<Card>
			<div style={{ padding: 10, marginBottom: 10 }}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between'
					}}
				>
					<img src={product.image} width={70} height={70} />
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<button
							onClick={onClickAdd}
							style={{ backgroundColor: 'green', cursor: 'pointer' }}
						>
							В корзину
						</button>
						<span>{product.price} $</span>
					</div>
				</div>
				<h2>{product.title}</h2>
				<p>{product.description}</p>
			</div>
		</Card>
	)
}
