import { createRoot } from 'react-dom/client'
import './style.css'
import App from './routes/App'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/cart'
import { FormsProvider } from './context/forms'

createRoot(document.getElementById('app')).render(
  <FormsProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </FormsProvider>
)
