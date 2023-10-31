import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])
  const [quantityToAdd, setQuantityToAdd] = useState(1)

  const handleAddToCart = (product, img) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      newCart[productInCartIndex].totalPrice = newCart[productInCartIndex].quantity * newCart[productInCartIndex].price
      setCart(newCart)
    } else {
      setCart(prevState => ([
        ...prevState,
        {
          ...product,
          quantity: quantityToAdd,
          importImage: `..${img}`,
          totalPrice: product.price * quantityToAdd
        }
      ]))
    }
  }

  const handleRemoveAll = () => {
    setCart([])
  }

  const handleDeleteProductFromCart = (product) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    const newCart = structuredClone(cart)

    if (newCart[productInCartIndex].quantity > 1) {
      newCart[productInCartIndex].quantity -= 1
      newCart[productInCartIndex].totalPrice = newCart[productInCartIndex].quantity * newCart[productInCartIndex].price
      setCart(newCart)
    } else {
      newCart.splice(productInCartIndex, 1)
      setCart(newCart)
    }
  }
  const handleAddQuantity = () => {
    setQuantityToAdd(prevQuantity => prevQuantity + 1)
  }
  const handleSubstractToCart = () => {
    setQuantityToAdd(prevQuantity => {
      return prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        quantityToAdd,
        handleAddQuantity,
        handleSubstractToCart,
        handleDeleteProductFromCart,
        handleRemoveAll
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
