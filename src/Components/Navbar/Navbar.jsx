import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import ig from '../Assets/instagram_icon.png'

export const Navbar = ({ isLoggedIn }) => {
  const [menu, setMenu] = useState('shop');
  const [language, setLanguage] = useState('EN');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
        <p>Cosplay</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu('shop') }}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu === 'shop' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('costumes') }}><Link style={{ textDecoration: 'none' }} to='/costumes'>Costumes</Link>{menu === 'costumes' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('wigs') }}><Link style={{ textDecoration: 'none' }} to='/wigs'>Wigs</Link>{menu === 'wigs' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('props') }}><Link style={{ textDecoration: 'none' }} to='/props'>Props</Link>{menu === 'props' ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>{isLoggedIn ? 'Logged in' : 'Login'}</button></Link>
        <Link to='/cart'><img src={cart_icon} alt='cart' /></Link>
        <div className="nav-language-switcher">
          <select value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
            <option value="EN">EN</option>
            <option value="ES">GEO</option>
          </select>
        </div>
        <div className="link"><Link to='https://dokidokicos.com/'><img src={ig} alt='ig'/></Link></div>
      </div>
    </div>
  );
};

export default Navbar;
