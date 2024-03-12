import {
	AppRoot,
	Counter,
	Div,
	Group,
	Header,
	Panel,
	PanelHeader,
	View
} from '@vkontakte/vkui'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Products } from './components/products'
import './index.scss'
import { RootState } from './store/store'

function App() {
	const { carts } = useSelector((state: RootState) => state.cart)

	return (
		<AppRoot>
			<View activePanel={'1'}>
				<Panel id='1'>
					<PanelHeader
						after={
							<Div className='headerCart'>
								<Link to={'/cart'}>
									<Header size='regular'>Перейти в корзину</Header>
								</Link>
								<Counter size='m'>{carts.length}</Counter>
							</Div>
						}
					>
						Тестовое для ВК маркет
					</PanelHeader>
					<Group
						header={
							<Header mode='secondary' size='large'>
								Продукты для добавления в корзину
							</Header>
						}
					>
						<Products />
					</Group>
				</Panel>
			</View>
		</AppRoot>
	)
}

export default App
