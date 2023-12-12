import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { Routes,Route } from 'react-router';

import Home from './Components/Home';
import Products from './Components/Products';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';




function App() {

  
  return (
    
    <div className="container">
        <NavBar/>    
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} exact/>
          <Route path='/cat' element={<Cart/>} />
          {/* <Route path='/cat/:itemId' element={<Cart/>} /> */}
          <Route path='/products/:id' element={<ProductDetails/>} exact/>
        </Routes>
      
    </div>


   
  )
}

export default App;
