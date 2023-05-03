import { useEffect, useState } from 'react'
import { ItemModel } from '../ItemModel/ItemModel'
import { allProducts } from '../../asyncMock'

export const ItemList = () => {
  
  const [Products, setProducts] = useState([]) 

    
  useEffect(() => {
    allProducts(setProducts)
  }, [])
    
  return (
    <div class='d-flex flex-wrap justify-content-evenly'>
        {
          Products.map( (product) => <ItemModel key={product.id} title={product.title} image={product.image} price={product.price} category={product.category}
          id={product.id}></ItemModel>)
        }
    </div>
  )
}