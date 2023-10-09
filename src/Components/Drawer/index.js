import React, { useContext, useState } from "react";
import { Info } from "../Info";
import AppContext from "../context";
import { Link } from "react-router-dom";

import styles from "./Drawer.module.scss";
import Inputs from "../Input";

function Drawer({ onClose, onDeleteFromCart, cartItems, opened }) {
  const [isOrderComplete, setisOrderComplete] = useState(false);
  const { setCartItems } = useContext(AppContext);

  const onClickOrder = () => {
    setisOrderComplete(true);
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            onClick={onClose}
            className="removeBtn"
            src="/img/remove.svg"
            alt="Remove"
          />
        </h2>

        {cartItems.length > 0 ? (
          <div className="d-flex flex-column">
            <div className={styles.items}>
              {cartItems?.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.tittle}</p>
                    <b>{obj.price}</b>
                  </div>

                  <img
                    onClick={() => onDeleteFromCart(obj.id)}
                    className="removeBtn"
                    src="/img/remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>

            <div className={styles.cartTotalBlock}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб. </b>
                </li>

                <li>
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} руб. </b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="greenButton">
                Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : isOrderComplete ? (
          <Inputs setisOrderComplete={setisOrderComplete}/>
        ) : isOrderComplete ?
          <Info
            title={"Заказ оформлен"}
            description={
                "Ваш заказ #18 скоро будет передан курьерской доставке"
            }
            image={"/img/complete-order.png"
            }
          />
          :   <Info
          title={"Корзина пустая"}
          description={
            "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
          }
          image={"/img/corobka.jpg"
          }
        />
        }
      </div>
    </div>
  );
}

export default Drawer;
