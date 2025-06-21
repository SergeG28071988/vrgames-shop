import React from 'react';

const GameModal = ({ game, onClose }) => {
  if (!game) return null;

  return (
    <div id="game-modal" className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>×</span>
        <h3 id="modal-title">{game.title}</h3>
        <p id="modal-description">{game.description}</p>
        <div className="game-price" id="modal-price">{game.price} руб.</div>
      </div>
    </div>
  );
};

export default GameModal;