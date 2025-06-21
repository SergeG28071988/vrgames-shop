import React, { Component } from 'react';
import gamesImage from '../assets/images/slider/gamepad.png';
import client1 from '../assets/images/client1.png';
import client2 from '../assets/images/client2.png';
import client3 from '../assets/images/client3.png';

export class AboutUs extends Component {
  render() {
    return (
      <section className="about-us" id="about-us">
        <div className="container">

          {/* О компании */}
          <div className="about-content">
            <div className="about-text">
              <h1>
                Магазин VR-игр <br />
                <span className="subtitle">Погрузись в виртуальный мир с лучшими играми!</span>
              </h1>
              <p>
                Мы специализируемся на продаже топовых VR-игр и аксессуаров с 2020 года. В нашем каталоге вы найдёте только лучшие тайтлы — от шутеров до иммерсивных RPG.
              </p>
              <p>
                Наша команда — это геймеры, как и вы. Мы знаем, что нужно настоящим фанатам виртуальной реальности: драйв, качество и доступность.
              </p>
              <p>
                Присоединяйтесь к тысячам довольных клиентов и откройте для себя новые миры уже сегодня!
              </p>
            </div>
            <div className="about-image">
              <img src={gamesImage} alt="Магазин VR-игр" />
            </div>
          </div>

          {/* Отзывы клиентов */}
          <div className="our-team">
            <h2>Отзывы наших клиентов</h2>
            <div className="team-members">
              <div className="team-member">
                <img src={client1} alt="Алексей Романов" />
                <h3>Алексей Романов</h3>
                <p>🎮 “Купил здесь Half-Life: Alyx — всё супер! Быстрая доставка и приятная цена. Буду заказывать ещё.”</p>
              </div>
              <div className="team-member">
                <img src={client2} alt="Мария Кузнецова" />
                <h3>Мария Кузнецова</h3>
                <p>🕹 “Большой выбор и классная поддержка. Помогли подобрать отличную игру для Oculus Quest.”</p>
              </div>
              <div className="team-member">
                <img src={client3} alt="Дмитрий Захаров" />
                <h3>Дмитрий Захаров</h3>
                <p>👾 “Очень крутой магазин для VR-геймеров! Уже трижды покупал — всегда доволен.”</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default AboutUs;
