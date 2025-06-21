import React, { useState } from 'react';
import GameModal from './GameModal';

const Games = ({ games }) => {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [modalGame, setModalGame] = useState(null);

  const genres = ['Все жанры', 'Симуляторы', 'Шутеры', 'RPG', 'Хоррор'];

  const filteredGames =
    selectedGenre === 'all'
      ? games
      : games.filter((game) => game.genre === selectedGenre);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre === 'Все жанры' ? 'all' : genre);
  };

  const openModal = (game) => {
    setModalGame(game);
  };

  const closeModal = () => {
    setModalGame(null);
  };

  const scrollToOrderForm = () => {
    const orderForm = document.getElementById('order');
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="games" id="games">
        <div className="container">
          <h2>Выберите игру</h2>

          <div className="games-content">
            {/* Левый фильтр */}
            <aside className="games-filter">
              <ul id="genre-filter">
                {genres.map((genre, index) => (
                  <li
                    key={index}
                    className={
                      selectedGenre === (genre === 'Все жанры' ? 'all' : genre)
                        ? 'active'
                        : ''
                    }
                    onClick={() => handleGenreClick(genre)}
                  >
                    {genre}
                  </li>
                ))}
              </ul>
            </aside>

            {/* Прокручиваемые карточки */}
            <div className="games-items">
              {filteredGames.map((game) => (
                <article key={game.id} className="game" data-genre={game.genre}>
                  <img
                    src={game.image_url}
                    alt={game.title}
                    onClick={() => openModal(game)}
                  />
                  <div className="game-details">
                    <h4>{game.title}</h4>
                    <p>{game.description}</p>
                    <div className="game-action">
                      <ul>
                        <li>
                          <div className="game-price">{game.price} руб.</div>
                        </li>
                      </ul>
                      <a
                        href="#order"
                        className="button white-button"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal(game);
                          scrollToOrderForm();
                        }}
                      >
                        Заказать
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GameModal game={modalGame} onClose={closeModal} />
    </>
  );
};

export default Games;
