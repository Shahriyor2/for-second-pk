import React from "react";
import Card from "../Components/Card";
import AppContext from "../Components/context";
import { Link } from "react-router-dom";

function Favorites({ items, isAdded, onAddToFavorite }) {
  const { favorites } = React.useContext(AppContext);
  return (
    <div className="content p-40">
      <div className="d-flex">
        <Link to="/">
          <img
            className="mr-10 cu-p toObratno"
            src="../img/toObratno.svg"
            alt=""
          />
        </Link>
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex card_block">
        {favorites.map((item) => (
          <Card
            isAdded={isAdded}
            key={item.id}
            {...item}
            favorited={true}
            onFavorite={onAddToFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
