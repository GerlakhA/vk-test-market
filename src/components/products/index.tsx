import { Div } from '@vkontakte/vkui'
import { useState } from 'react'
import { inintialData } from '../../api/data'
import { ProductItem } from './ProductItem'

export const Products = () => {
	const [products] = useState(inintialData)

	return (
		<Div>
			{products?.length &&
				products.map(product => (
					<ProductItem key={product.id} product={product} />
				))}
		</Div>
	)
}
