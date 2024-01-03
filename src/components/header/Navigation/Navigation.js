import "./Navigation.css";

import React, { useState } from "react";

import burger from "./NavigationSVG/burger.svg";
import snack from "./NavigationSVG/snack.svg";
import hotdog from "./NavigationSVG/hotdog.svg";
import combo from "./NavigationSVG/combo.svg";
import shawarma from "./NavigationSVG/shawarma.svg";
import pizza from "./NavigationSVG/pizza.svg";
import wok from "./NavigationSVG/wok.svg";
import desert from "./NavigationSVG/desert.svg";
import souce from "./NavigationSVG/souce.svg";

const buttonsData = [
  { id: "burgers", label: "Бургеры", image: burger },
  { id: "snacks", label: "Закуски", image: snack },
  { id: "hotdog", label: "Хот-доги", image: hotdog },
  { id: "combo", label: "Комбо", image: combo },
  { id: "shawarma", label: "Шаурма", image: shawarma },
  { id: "pizza", label: "Пицца", image: pizza },
  { id: "wok", label: "Вок", image: wok },
  { id: "desert", label: "Десерты", image: desert },
  { id: "souce", label: "Соусы", image: souce },
];

function Navigation({ onCategoryChange }) {
  const [activeButton, setActiveButton] = useState(buttonsData[0].id);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="navigation__wrapper">
      <div className="navigation__panel">
        {buttonsData.map(({ id, label, image }) => (
          <button
            key={id}
            className={`navigation__item-btn ${
              activeButton === id ? "button__active" : ""
            }`}
            onClick={() => {
              handleButtonClick(id);
              onCategoryChange(id);
            }}
          >
            <img src={image} alt={label} /> {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
