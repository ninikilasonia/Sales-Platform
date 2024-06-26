import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login';
import Contact from './Components/Contact/Contact';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/costumes' element={<ShopCategory category="costumes"/>}/>
            <Route path='/wigs' element={<ShopCategory category="wigs"/>}/>
            <Route path='/props' element={<ShopCategory category="props"/>}/>

            <Route path='product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path='/login/google-facebook' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
