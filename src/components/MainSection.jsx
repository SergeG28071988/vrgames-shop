import React from 'react'
import mainImg from '../assets/images/main-image.png'

export default function MainSection() {
  return (
    <section className="main-content">
        <div className="container">        
            <div className="main-info">
                <h1>Покорите мир компьютерных игр!</h1>
                <p>От забытой классики - до современных игр с открытым миром дополненной виртуальной реальности.
                        Почувствуй себя настоящим супер-героем! Закажи игру и вступи в битву со злом!</p>
                <a href="#games" className="button" id="main-action-button">Посмотреть каталог</a>
            </div>  
            <img src={mainImg} alt="Main Game" className="main-image"/>              
        </div>        
    </section>         
  )
}