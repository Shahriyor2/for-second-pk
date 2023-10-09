import React from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

function Orders() { 
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
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex card_block">
        {[].map((item) => (
          <Card />
        ))}
      </div>
    </div>
  );
}

export default Orders;
