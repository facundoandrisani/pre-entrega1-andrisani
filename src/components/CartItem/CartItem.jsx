import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const CartItem  = ({id, name, price, quantity, img}) => {
    const { removeItem } = useContext(CartContext)
    return (
        <div class='container d-flex justify-content-center align-items-center'>
            <ul class='row card'>
                <li class='row' key ={id}>
                    <div class="col-md-4">
                        <img className='cardDet' src={img} alt="" />
                    </div>
                    <div class="col-md-4">
                        <ul class="list-group">
                            <li class="list-group-item"><h2>{name}</h2></li>
                            <li class="list-group-item">Precio: ${price}</li>
                            <li class="list-group-item">Cantidad:{quantity}</li> 
                            <li class="list-group-item">Subtotal: ${quantity * price}</li>
                            <li class="list-group-item"><button onClick={() => removeItem(id)} className='boton-azul'>Borrar item</button></li>              
                        </ul>    
                    </div>
                </li>
            </ul>
        </div>
    )
}
