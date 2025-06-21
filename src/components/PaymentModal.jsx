import React, { useState } from 'react';

// Базовый компонент без реального взаимодействия с API
const PaymentModal = ({ onClose }) => {
  // Состояния для хранения вводимых данных
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  // Простейшая проверка введённых данных
  const validateData = () => {
    if (!cardNumber || !cardHolder || !expiry || !cvv) {
      alert("Заполните все поля!");
      return false;
    }
    if (cardNumber.length !== 19 || !/\d/.test(cardNumber)) {
      alert("Некорректный номер карты");
      return false;
    }
    if (expiry.length !== 5 || !/[0-9]{2}\/[0-9]{2}/.test(expiry)) {
      alert("Неправильный срок действия (формат MM/YY)");
      return false;
    }
    if (cvv.length > 4 || cvv.length < 3 || !/\d/.test(cvv)) {
      alert("CVV/CVC должно быть от 3 до 4 цифр");
      return false;
    }
    return true;
  };

  // Имитация успешной обработки платежа
  const handlePayment = () => {
    if (validateData()) {
      alert('Оплата пройдена успешно! Данные проверены.');
      onClose(); // Закрываем окно после проверки
    }
  };

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <h3 style={styles.title}>Тестовая оплата</h3>
        
        {/* Поле ввода номера карты */}
        <label style={styles.label}>Номер карты:</label>
        <input
          type="text"
          placeholder="0000 0000 0000 0000"
          value={cardNumber}
          maxLength={19}
          onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
          style={styles.input}
        />
        
        {/* Поле имени держателя карты */}
        <label style={styles.label}>Имя владельца:</label>
        <input
          type="text"
          placeholder="Имя Фамилия"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          style={styles.input}
        />
        
        {/* Срок действия и CVV */}
        <div style={styles.row}>
          <div style={{ flex: 1, marginRight: '8px' }}>
            <label style={styles.label}>Срок действия:</label>
            <input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              maxLength={5}
              onChange={(e) => setExpiry(e.target.value)}
              style={styles.input}
            />
          </div>
          
          <div style={{ flex: 1 }}>
            <label style={styles.label}>CVV / CVC:</label>
            <input
              type="password"
              placeholder="***"
              value={cvv}
              maxLength={4}
              onChange={(e) => setCvv(e.target.value)}
              style={styles.input}
            />
          </div>
        </div>
        
        {/* Кнопка подтверждения оплаты и закрытия окна */}
        <div style={styles.buttonGroup}>
          <button onClick={handlePayment} style={{...styles.button, ...styles.payButton}}>Оплатить</button>
          <button onClick={onClose} style={{...styles.button, ...styles.cancelButton}}>Отмена</button>
        </div>
      </div>
    </div>
  );
};

// Стили оформления интерфейса
const styles = {
  backdrop: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999
  },
  modal: {
    backgroundColor: '#ffffff',
    padding: '32px 24px',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
    fontSize: '20px',
    fontWeight: '600'
  },
  label: {
    fontSize: '14px',
    marginBottom: '4px',
    color: '#555'
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    marginBottom: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s'
  },
  row: {
    display: 'flex',
    gap: '8px',
    marginBottom: '16px'
  },
  buttonGroup: {
    marginTop: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px'
  },
  button: {
    flex: 1,
    padding: '10px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  payButton: {
    backgroundColor: '#4CAF50',
    color: '#fff'
  },
  cancelButton: {
    backgroundColor: '#f44336',
    color: '#fff'
  }
};

export default PaymentModal;