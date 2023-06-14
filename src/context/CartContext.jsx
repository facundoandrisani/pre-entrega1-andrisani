import { createContext, useState } from "react"

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, quantity) => {
        if(!insideCart(item.id)) {
            setCart(prev =>[...prev, {...item, quantity}])
        } else {
            console.error('El producto ya ha sido agregado')
        }
    }

    const removeItem = (id) => {
        const cartUpdate = cart.filter(item => item.id !== id)
        setCart(cartUpdate)
    }
    
    const clearCart = () => {
        setCart([])
    }

    const insideCart =  (id) => {
        return cart.some(item => item.id === id)
    }

    const total = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
      };
    
    const totalQuantity = () =>
        cart.reduce(
          (acumulador, productoActual) => acumulador + productoActual.quantity,
          0
        );

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity}}>
            { children }
        </CartContext.Provider>
    )
}