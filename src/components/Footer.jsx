import React from 'react';
import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className='container'>
          <div className="logo">
              <img src={logo} alt="Logo" />
          </div>
          <div className="rights">
             &copy; <span className="text-black">Game</span><span className="text-red">Shop</span> — Все права защищены
         </div>
      </div>    
  </footer>
  )
}
