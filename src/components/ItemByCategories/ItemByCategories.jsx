import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import '.././ProductDetail/ProductDetail.css';
import { ItemModel } from '../ItemModel/ItemModel';
import { Navbar } from '../Navbar/Navbar';
import { collection, getDocs,  where, query} from 'firebase/firestore'
import { db } from '../../services/db';

export const ItemByCategories = () => {

  const params = useParams()
  const {productDescription} = params

  const [products, setProducts] = useState(null)
  
  
  useEffect(() => {

    const collectionDb = productDescription 
    ? query(collection(db, 'items'), where('description', '==', productDescription))
    : <h3>ERORR 404</h3>

    getDocs(collectionDb)
    .then( products => {
      setProducts(products.docs.map( doc => ({id: doc.id ,...doc.data()} ) ))
    } )

  },[productDescription])

  return (
    <>
    {
    products
    ?
    <>
     <Navbar></Navbar>
     <ul>
        <div class='d-flex flex-wrap justify-content-evenly'>
          {
            products.map( (product) => <ItemModel key={product.id} name={product.name} img={product.img} price={product.price} description={product.description}
            stock={product.stock} id={product.id}></ItemModel>)
          }
        </div>
     </ul>
    </>
    :
    <h3>Cargando...</h3>
    }
    </>
  )
}