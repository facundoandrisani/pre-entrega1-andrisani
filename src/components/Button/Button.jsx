import React from 'react'
import { useState } from 'react'

export const Button = ({stock, inicio, OnAddition}) => {

  const [quantity, setQuantity] = useState(inicio) 
  
  const incrementa = () => {
    if (quantity < stock) {
        setQuantity(quantity + 1)
    }      
  }

  const decrementa = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1)
    }      
  }

  return (
    <>
    <div class="d-flex justify-content-evenly">
        <button className='boton-azul' onClick={decrementa}> - </button>
        <h4>{quantity}</h4>
        <button className='boton-azul'onClick={incrementa}> + </button>
    </div>
    <div>
        <button className='boton-azul' onClick={() => OnAddition(quantity)} disabled={!stock}>Agregar al carrito</button>
    </div>
    </>
  )
}
