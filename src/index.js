import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemByCategories } from './components/ItemByCategories/ItemByCategories';
import { ProductDetail } from './components/ProductDetail/ProductDetail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} /> 
      <Route path='/products' element={<ItemListContainer greeting={"Todos los productos"} />} />
      <Route path='/category/:category' element={<ItemByCategories/>} />
      <Route path='/products/:id' element={<ProductDetail/>}/>
      <Route path='*' element={< h2>404 ERROR</h2> } />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
