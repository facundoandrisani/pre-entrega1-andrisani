import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemByCategories } from './components/ItemByCategories/ItemByCategories';
import { ProductDetail } from './components/ProductDetail/ProductDetail';
import { CartProvider } from './context/CartContext'
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
          <Routes>
            <Route path='/' element={<App/>} /> 
            <Route path='/products' element={<ItemListContainer greeting={"Todos los productos"} />} />
            <Route path='/description/:productDescription' element={<ItemByCategories/>} />
            <Route path='/products/:productId' element={<ProductDetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={< h2>404 ERROR</h2> } />
          </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
