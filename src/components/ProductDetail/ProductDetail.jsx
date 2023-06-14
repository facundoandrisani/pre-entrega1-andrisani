import React, { useContext, useEffect, useState } from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'
import './ProductDetail.css';
import { doc, getDoc} from "firebase/firestore"
import { Button } from '../Button/Button';
import { Navbar } from '../Navbar/Navbar';
import { db } from '../../services/db';
import { CartContext } from '../../context/CartContext';

export const ProductDetail = () => {

  const params = useParams()
  const navigate = useNavigate()
  const {productId} = params
  const onBack = () => {
    navigate(-1)
  }
  const [product, setProduct] = useState(null)
  
  useEffect(() => {

      const itemDB = doc(db, 'items', productId)

      getDoc(itemDB)
      .then( (product) => {
        if (product.exists()){
          setProduct({id: product.id ,...product.data()})
        }
      })
    }
    ,[productId]
  )

  const [quantityAdded, setQuantityAdded] = useState(0)
  const {addItem} = useContext(CartContext)
  const handleonAdd = (quantity) => {
  setQuantityAdded(quantity)
  const item = product
  
  addItem(item, quantity)
}
  
  return (
    <>
    {
      product
      ?
      <>
      <Navbar></Navbar>
      <h2>{product.name}</h2>
        <div class="container">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-md-6">
              <img class="card-img-top" className='cardDet' src={product.img} alt="Foto del producto" />
            </div>
            <div class="col-md-4">
              <div class="card-body">
                <ul class="list-group ">
                  <li class="list-group-item"><h5>{product.name}</h5></li>
                  <li class="list-group-item">{product.description}</li>
                  <li class="list-group-item">${product.price}</li>               
                  <li class="list-group-item">Stock: {product.stock}</li>
                  <li class="list-group-item"> { quantityAdded > 0 
                  ? (<Link to='/cart' className='boton-azul'>Terminar compra</Link>) 
                  : (<Button inicio={1} stock={product.stock} OnAddition={handleonAdd}/>)}
                  </li>
                  <li class="list-group-item"><button className='boton-azul' onClick={onBack}> Volver </button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
      :
      <h3>Cargando...</h3>
    }
    </>

  )
}