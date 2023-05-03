import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { detailForAProduct } from '../../asyncMock'
import './ProductDetail.css';
import { Navbar } from '../Navbar/Navbar';

export const ProductDetail = () => {

  const [aProduct, setaProduct] = useState([])
  const params = useParams()
  
  useEffect(() => {
    detailForAProduct(params.id, setaProduct)
  },[])

  return (
    <>
    <Navbar/>
    <h2 className='centradoDet'>Producto Detallado: {params.id}</h2>
    <div className='containerDet'>
      <div className='cardDet'>
        <h4 className='centradoDet h4Det'>{aProduct.title}</h4>
        <p className='pDet'>{aProduct.category}</p>
        <p className='pDet'>{aProduct.description}</p>
        <p className='pDet'>{aProduct.price}</p>
        <img className='imageDet' src={aProduct.image} alt="Foto del producto" />
      </div>
    </div>
    </>
  )
}
