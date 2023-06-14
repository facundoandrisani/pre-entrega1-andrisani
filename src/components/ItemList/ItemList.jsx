import { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs} from 'firebase/firestore'
import { ItemModel } from '../ItemModel/ItemModel'

export const ItemList = () => {
  
  const db = getFirestore()
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const productsDB = collection(db, 'items')
  
    getDocs(productsDB)
    .then( products => {
      setProducts(products.docs.map( doc => ({id: doc.id ,...doc.data()} ) ))
    } )

  }, [db])
  
  


  return (
    <>
    {
    products.length
    ?
    <>
    <ul>
      {
        <div class='d-flex flex-wrap justify-content-evenly'>
        {
          products.map( (product) => <ItemModel key={product.id} name={product.name} img={product.img} price={product.price} description={product.description}
          stock={product.stock} id={product.id}></ItemModel>)
        }
        </div>
      }
    </ul>
    </>
    :
    <h3>Cargando...</h3>
    }
    </>
  )
}