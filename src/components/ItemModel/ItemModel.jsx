import React from 'react'
import { Button } from '../Button/Button'
import './ItemModel.css';
import { Link } from 'react-router-dom';

// * 450 (Valor del dolar supongamos) jajaja

export const ItemModel = ({id, title, image, price, category}) => {

  return (
    <div class="card justify-content-center border border-black">
        <ul>
            <li key ={id}>
                <img  src={image} alt="Foto de los productos" />
                <h5 class="card-title">{title}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${price*450}</li>
                    <li class="list-group-item">{category}</li>
                    <li ><Button inicio={1} stock={5} OnAddition={(cantidad) => console.log('Cantidad agregada ', cantidad)}/></li>
                    <li class="list-group-item"> <Link to={`/products/${id}`}>Ver mas</Link></li>
                </ul>
            </li>
        </ul>
    </div>
  )
}
