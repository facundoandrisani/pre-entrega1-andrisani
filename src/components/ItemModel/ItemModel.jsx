import React from 'react'
import './ItemModel.css';
import { Link } from 'react-router-dom';

export const ItemModel = ({id, name, img, price, description}) => {

  return (
    <div class="card justify-content-center border border-black">
        <ul>
            <li key ={id}>
                <img  src={img} alt="Foto de los productos" />
                <h5 class="card-title">{name}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${price}</li>
                    <li class="list-group-item">{description}</li>                
                    <li class="list-group-item"> <Link to={`/products/${id}`} className='boton-azul'>Ver mas</Link></li>
                </ul>
            </li>
        </ul>
    </div>
  )
}
