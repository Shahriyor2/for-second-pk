import React from "react";
import AppContext from "../context";

function Inputs({
  setisOrderComplete,
  isOrderComplete,
  isCheked,
  setIsCheked,
}) {
  const {setCartOpened} = React.useContext(AppContext);

  const onClickCheked = () => {
    setisOrderComplete(false);
    setIsCheked(true);
  };

  console.log(isOrderComplete);
  return (
    <form>
      <div className="Validation">
        <h1>Контактная информация</h1>
        <div className="inputs d-flex flex-column justify-center align-center">
          <span>Имя</span>
          <input type="name" placeholder="Фамилия Имя"></input>
          <span>Телефон</span>
          <input
            type="number"
            name="tel"
            pattern=" [0-9]{,9}"
            placeholder="Номер телефона +992"
          ></input>
          <span>Email</span>
          <input
            type="email"
            name="login"
            pattern=" [0-9]{,9}"
            placeholder="адресс электронной почты"
          ></input>
          <button onClick={onClickCheked}>Отправить</button>

          <button onClick={() => setCartOpened(false)} type="button" className="greenButton">
            <img src="img/Стрелка-назад.svg" alt="Arrow" />
            Вернуться назад
          </button>
        </div>
      </div>
    </form>
  );
}

export default Inputs;
