import { useEffect } from 'react';

const DomBindings = () => {
  useEffect(() => {
    console.log('DomBindings loaded'); // Логируем загрузку компонента

    // Парралакс эффект для главного изображения
    const mainImage = document.querySelector('.main-image');
    if (mainImage) {
      window.addEventListener('scroll', () => {
        const offsetRight = -376 + window.scrollY * 0.2;
        mainImage.style.right = `${offsetRight}px`;
      });
    }

    // Обработчики фильтрации игр
    const filterItems = document.querySelectorAll('.games-filter li');
    const gameItems = document.querySelectorAll('.game');
    const gamesContent = document.getElementById('games-content');

    if (filterItems.length > 0 && gameItems.length > 0 && gamesContent) {
      filterItems.forEach(item => {
        item.onclick = () => {
          filterItems.forEach(el => el.classList.remove('active'));
          item.classList.add('active');

          const filterText = item.textContent.toLowerCase();
          gameItems.forEach(game => {
            const gameGenre = game.dataset.genre?.toLowerCase();
            if (filterText === 'все жанры' || gameGenre === filterText) {
              game.style.display = 'flex';
            } else {
              game.style.display = 'none';
            }
          });

          gamesContent.scrollIntoView({ behavior: 'smooth' });
        };
      });
    }

    // Выбор названия игры при клике на карточку
    const gameField = document.getElementById('game');
    const whiteButtons = document.querySelectorAll('.button.white-button');

    if (gameField && whiteButtons.length > 0) {
      whiteButtons.forEach(button => {
        button.addEventListener('click', () => {
          const gameArticle = button.closest('article.game');
          const gameTitle = gameArticle.querySelector('h4');
          if (gameTitle && gameField) {
            gameField.value = gameTitle.textContent.trim();
          }
        });
      });
    }

    // Валидатор формы заказа
    const orderButton = document.getElementById('order-action');
    const nameField = document.getElementById('name');
    const phoneField = document.getElementById('phone');

    if (orderButton && nameField && phoneField) {
      orderButton.addEventListener('click', () => {
        const fields = [nameField, phoneField, gameField];
        let hasError = false;

        fields.forEach(field => {
          if (field.id === 'phone' && field.value.length < 10) {
            field.style.borderColor = 'red';
            hasError = true;
          } else if (field.value.trim() === '') {
            field.style.borderColor = 'red';
            hasError = true;
          } else {
            field.style.borderColor = 'white';
          }
        });

        if (!hasError) {
          alert('Спасибо за заявку! Мы скоро свяжемся с вами');
          fields.forEach(field => (field.value = ''));
        }
      });
    }

    // Перемещаемый фоновый слой
    const ordersImage = document.querySelector('.orders-image');
    if (ordersImage) {
      document.addEventListener('mousemove', event => {
        ordersImage.style.transform = `translate3d(${(event.clientX * 0.4) / 7}px,${(event.clientY * 0.4) / 7}px,0px)`;
      });
    }

    // Плавающая анимация фона
    const mainElem = document.querySelector('.main');
    if (mainElem) {
      document.addEventListener('scroll', () => {
        mainElem.style.backgroundPositionX = `0 ${0.4 * window.scrollY}px`;
      });
    }

    // Открытие модальных окон
    const modal = document.getElementById('game-modal');
    const closeBtn = document.querySelector('.close-btn');

    if (modal && closeBtn) {
      document.querySelectorAll('.game').forEach(gameCard => {
        gameCard.addEventListener('click', () => {
          const title = gameCard.querySelector('h4').innerText;
          const description = gameCard.querySelector('p').innerText;
          const price = gameCard.querySelector('.game-price').innerText;

          document.getElementById('modal-title').innerText = title;
          document.getElementById('modal-description').innerText = description;
          document.getElementById('modal-price').innerText = price;

          modal.style.display = 'block';
        });
      });

      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      window.addEventListener('click', event => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    }

    // Удаляем обработчики при удалении компонента
    return () => {
      window.removeEventListener('scroll', null); // Для парралакса
      document.removeEventListener('mousemove', null); // Для движения фона
      document.removeEventListener('scroll', null); // Для перемещения фона
    };
  }, []);

  return null; // Компонент ничего не рендерит визуально
};

export default DomBindings;