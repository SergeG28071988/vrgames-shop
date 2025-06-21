import React, { useState } from 'react';
import ordersImage from '../assets/images/Oculus-Touch-Orders-image.png';
import PaymentModal from './PaymentModal'; // Импортируем компонент PaymentModal

const OrderForm = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false); // Состояние для показа модального окна

  // Обработчик события клика по кнопке «Оформить заказ»
  const handleSubmit = (event) => {
    event.preventDefault(); // Предотвращаем стандартную отправку формы
    setShowPaymentModal(true); // Открываем модальное окно оплаты
  };

  return (
    <section className="order" id="order">
      <div className="container">
        <img src={ordersImage} alt="Games" className="orders-image" />
        <h2 className="sub-title">Заказать игру</h2>
        <div className="order-text">
          Заполните контактные данные, и мы перезвоним вам для обсуждения деталей и подтверждения заказа
        </div>
        <form action="" className="order-form">
          <input type="text" className="order-input" id="name" placeholder="Ваше имя" />
          <input type="text" className="order-input" id="phone" placeholder="Ваш телефон" />
          <input type="text" className="order-input" id="game" placeholder="Игра, которая вас интересует" />
          <button className="button" type="submit" id="order-action" onClick={handleSubmit}>
            Оформить заказ
          </button>
        </form>
        {/* Отображаем модалку, если showPaymentModal равно true */}
        {showPaymentModal && (
          <PaymentModal onClose={() => setShowPaymentModal(false)} /> // Передаем метод закрытия модального окна
        )}
      </div>
    </section>
  );
};

export default OrderForm;