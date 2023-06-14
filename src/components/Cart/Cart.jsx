import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { CartItem } from './../CartItem/CartItem'
import { Navbar } from "../Navbar/Navbar"


export const Cart = () => {
    const { cart, clearCart,  total} = useContext(CartContext)
   
    if(cart.length === 0) {
        return(
            <div>
                <Navbar></Navbar>
                <h2 className='centrado' >No hay items en el carrito</h2>
                <Link to='/' className='boton-azul centrado'>Volver</Link>
            </div>
        )
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <h2>Carrito:</h2>
            { cart.map( (productos) => (<CartItem key={productos.id} {...productos} />
            ))}
            <h4 className='centrado'>Total: $ {total()}</h4>
            <button onClick={() => clearCart()} className='boton-azul '>Limpiar carrito</button>
            <Link to='/checkout' className='centrado boton-azul'>Comprar</Link>
        </div>
    )   
}