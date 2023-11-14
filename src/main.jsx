import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TokenContexProvider } from './context/TokenContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TokenContexProvider>
      <App />
    </TokenContexProvider>
  </React.StrictMode>,
)
