import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Main from './page6/Main'
import Products from './page6/Products'
import ProductsDetail from './page6/ProductsDetail'
import './page6/reset.css'
import './page6/style.css'

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":productID" element={<ProductsDetail />} />
          {/* /products/:productID */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
/* 
<Route> 에 index  가 안들어가도 됨
*/
