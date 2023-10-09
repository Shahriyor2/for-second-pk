import React from "react";
import AppContext from "./context";

export const Info = ({image, title, description}) => {
    const {setCartOpened} = React.useContext(AppContext);

  return (
    <div className="cartEmpty d-flex flex-column align-center flex">
      <img width={120} src={image} alt="corobka/greatOrder" />
      <h2 className="mb-10">{title}</h2>
      <p className="opacity-6">
        {description}
      </p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="img/Стрелка-назад.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

