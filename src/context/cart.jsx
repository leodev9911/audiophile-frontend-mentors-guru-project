import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const handleAddToCart = (product, img) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      setCart(newCart)
    } else {
      setCart(prevState => ([
        ...prevState,
        {
          ...product,
          quantity: 1,
          importImage: `..${img}`
        }
      ]))
    }
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
