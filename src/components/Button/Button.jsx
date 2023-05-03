import React from 'react'
import { useState } from 'react'

export const Button = ({stock, inicio, OnAddition}) => {

  const [cantidad, setCantidad] = useState(inicio) 
  
  const incrementa = () => {
    if (cantidad < stock) {
        setCantidad(cantidad + 1)
    }      
  }

  const decrementa = () => {
    if (cantidad > 1) {
        setCantidad(cantidad - 1)
    }      
  }

  return (
    <>
    <div class="d-flex justify-content-evenly">
        <button className='boton-azul' onClick={decrementa}> - </button>
        <h4>{cantidad}</h4>
        <button className='boton-azul'onClick={incrementa}> + </button>
    </div>
    <div>
        <button className='boton-azul' onClick={() => OnAddition(cantidad)} disabled={!stock}>Agregar al carrito</button>
    </div>
    </>
  )
}

