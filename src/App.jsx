import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainSection from './components/MainSection'
import GameSlider from './components/GameSlider'
import DomBindings from './components/DomBindings'
import game1 from './assets/images/1.png';
import game2 from './assets/images/2.png';
import game3 from './assets/images/3.png';
import game4 from './assets/images/4.png';
import game5 from './assets/images/5.png';
import game6 from './assets/images/6.png';
import game7 from './assets/images/7.png';
import game8 from './assets/images/8.png';
import Games from './components/Games'
import OrderForm from './components/OrderForm'
import AboutUs from './components/AboutUs'

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {      
      games: [
        {
          id: 1,
          title: "Job Simulator VR",
          description: "Добро пожаловать в будущее, где роботы заменили все работы. Испытайте офис, кухню и автомастерскую в VR.",
          genre: "Симуляторы",
          price: 699,
          image_url: game1
        },
        {
          id: 2,
          title: "Pavlov VR",
          description: "Классический VR-шутер с многопользовательским режимом и реалистичным оружием.",
          genre: "Шутеры",
          price: 999,
          image_url: game2
        },
        {
          id: 3,
          title: "Zenith: The Last City",
          description: "Масштабная VR-MMORPG с открытым миром, боями и исследованиями.",
          genre: "RPG",
          price: 1499,
          image_url: game3
        },
        {
          id: 4,
          title: "The Exorcist: Legion VR",
          description: "Погрузитесь в пугающие расследования и сражайтесь с потусторонними силами в виртуальной реальности.",
          genre: "Хоррор",
          price: 799,
          image_url: game4
        },
        {
          id: 5,
          title: "Half-Life: Alyx",
          description: "Флагманский VR-шутер от Valve. Боритесь с Альянсом в разрушенном Сити-17.",
          genre: "Шутеры",
          price: 2299,
          image_url: game5
        },
        {
          id: 6,
          title: "Richie's Plank Experience",
          description: "Испытайте страх высоты, прогуливаясь по узкой доске на вершине небоскрёба.",
          genre: "Симуляторы",
          price: 499,
          image_url: game6
        },
        {
          id: 7,
          title: "Phasmophobia VR",
          description: "Станьте охотником за привидениями и исследуйте дома, полные паранормальной активности.",
          genre: "Хоррор",
          price: 649,
          image_url: game7
        },
        {
          id: 8,
          title: "The Mage's Tale",
          description: "Станьте магом и исследуйте подземелья, полные тайн и врагов, используя заклинания и головоломки.",
          genre: "RPG",
          price: 899,
          image_url: game8
        },
      ],          
    }     
  }
  render() {
  return (    
      <main className="main">  
        <GameSlider/>     
        <DomBindings/>  
        <Header/>        
        <MainSection/>
        <div className="black-block"></div>      
        <Games games={this.state.games}/>   
        <AboutUs/>    
        <OrderForm/> 
        <Footer/>
     </main> 
  )
}
}
export default App
