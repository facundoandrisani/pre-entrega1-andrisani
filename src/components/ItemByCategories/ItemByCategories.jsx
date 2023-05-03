import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getProductsByCategory } from '../../asyncMock'
import '.././ProductDetail/ProductDetail.css';
import { ItemModel } from '../ItemModel/ItemModel';
import { Navbar } from '../Navbar/Navbar';

export const ItemByCategories = () => {

  const [aProduct, setaProduct] = useState([])
  const params = useParams()
  
  useEffect(() => {
    getProductsByCategory(params.category, setaProduct)
  },[])

  return (
    <>
     <Navbar></Navbar>
     <div class='d-flex flex-wrap justify-content-evenly'>
        {
          aProduct.map( (product) => <ItemModel key={product.id} title={product.title} image={product.image} price={product.price} category={params.category}
          id={product.id}></ItemModel>)
        }
    </div>
    </>
  )
}