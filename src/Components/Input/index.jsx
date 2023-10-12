import React from "react";
import AppContext from "../context";

function Inputs({
  setisOrderComplete,
  isOrderComplete,
  isCheked,
  setIsCheked,
}) {
  const { setCartOpened } = React.useContext(AppContext);

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
            // type="tel"
            // name="number"
            // value="+992"
            // // pattern="^\+992[1-9]{10}$"
            // placeholder="Номер телефона +992"                          400 570
             type="tel" name="phone" maxlength="16" placeholder="+992(___)___-___"  id="phone"
          ></input>
          <span>Email</span>
          <input
            type="email"
            name="login"
            placeholder="адресс электронной почты"
            required
          ></input>

          <input
            className="commentBtn"
            type="text"
            placeholder="введите комментарий"
            minlength="7"
            maxlength="100"
          ></input>
          <button onClick={onClickCheked}>Отправить</button>

          <button
            onClick={() => setCartOpened(false)}
            type="button"
            className="greenButton"
          >
            <img src="img/Стрелка-назад.svg" alt="Arrow" />
            Вернуться назад
          </button>
        </div>
      </div>
    </form>
  );
}

export default Inputs;
