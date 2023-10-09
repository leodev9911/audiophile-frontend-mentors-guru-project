import { createRoot } from 'react-dom/client'
import './style.css'
import App from './routes/App'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('app')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
