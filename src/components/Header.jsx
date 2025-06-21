import React from 'react';


export default function Header() {
  return (
    <header className="header">
            <div className="container">
                <span className="logo">
                    <span className="logo-black">Game</span>
                    <span className="logo-red">Shop</span>
                </span>
                {/* <ul className='menu'>
                    <li><a href="#games">НАШ каталог видеоигр</a></li>
                    <li><a href="#about-us">Про нас</a></li>                     
                    <li><a href="#order">Оформить заказ</a></li>                 
                </ul>                          */}
                {/* <div className='presentation'></div>   */}
                <nav className="menu">
                    <ul>                        
                        <li>
                            <a href="#games">НАШ каталог видеоигр</a>
                        </li>
                        <li>
                            <a href="#order">Оформить заказ</a>
                        </li>                        
                    </ul>
                </nav>
                <a href="tel:+971523898989" className="phone">+ 7 495 777 77 77</a>
            </div>            
        </header>
  )
}
