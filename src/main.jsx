import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./Components/App.jsx";
import { CartProvider } from "./Context/CartContext";

createRoot(document.getElementById('root')).render(
  
    <CartProvider>
      <App />
    </CartProvider>

)
