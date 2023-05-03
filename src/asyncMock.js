import axios from 'axios'

export const allProducts = async (state) => {
    const peticion = await axios.get('https://fakestoreapi.com/products?limit=10')
    state(peticion.data)
}

export const detailForAProduct = async (id, state) => {
    const peticion = await axios.get(`https://fakestoreapi.com/products/${id}`)
    state(peticion.data)
}

export const getProductsByCategory = async (category, state) => {
    const peticion = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
    state(peticion.data)
}