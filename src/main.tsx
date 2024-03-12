import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.scss'
import { RoutesApp } from './router/Routes.tsx'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ConfigProvider>
			<AdaptivityProvider>
				<Provider store={store}>
					<RoutesApp />
				</Provider>
			</AdaptivityProvider>
		</ConfigProvider>
	</React.StrictMode>
)
