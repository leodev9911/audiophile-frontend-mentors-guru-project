import { createRoot } from 'react-dom/client'
import './style.css'
import App from './routes/App'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/cart'

createRoot(document.getElementById('app')).render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
)
