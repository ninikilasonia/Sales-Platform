import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_iocn from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt=''/>
        <p>Cosplay</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>offices</li>
        <li>About</li>\
        <li><Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link></li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
        <img src={instagram_icon} alt=''/>
        </div> 
        <div className="footer-icons-container">
        <img src={pintester_icon} alt=''/>
        </div>
        <div className="footer-icons-container">
        <img src={whatsapp_iocn} alt=''/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 Scripting languges final project</p>
      </div>
    </div>
  )
}

export default Footer