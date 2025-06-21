import React from "react";
import gamepad1 from '../assets/images/slider/gamepad1.png';
import gamepad2 from '../assets/images/slider/gamepad2.png';
import gamepad3 from '../assets/images/slider/gamepad3.png';

import glasses1 from '../assets/images/slider/VR-glasses1.png';
import glasses2 from '../assets/images/slider/VR-glasses2.png';
import glasses3 from '../assets/images/slider/VR-glasses3.png';

const images = [
    gamepad1, glasses1, gamepad2, glasses2, gamepad3, glasses3
];

export default function GameSlider() {
  const repeatCount = 6; // сколько раз повторить цикл

  const slides = Array.from({ length: repeatCount * images.length }, (_, i) => (
    <div className="game-slide" key={i}>
      <img src={images[i % images.length]} alt={`Слайд ${i}`} />
    </div>
  ));

  return (
    <div className="game-slider-container">
      <div className="game-slider-track">{slides}</div>
    </div>
  );
}
