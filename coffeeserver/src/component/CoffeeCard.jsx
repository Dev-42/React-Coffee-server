import React from "react";

const CoffeeCard = ({ image, title, price, description, ingredients }) => {
  return (
    <div>
      <img src={image} alt="coffeeImg" />
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <ul>
        {ingredients.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default CoffeeCard;
