import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import '@/assets/style/index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
