import React from "react";
import { useSelector } from "react-redux";
import style from "./CartTotal.module.css";

const CartTotal = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className={style.cart__total}>
      <div className={style.cart__totalLabel}>총 합계</div>
      <div className={style.cart__totalPrice}>
        <span className={style.cart__totalPriceValue}>
          {totalPrice.toLocaleString()}
        </span>
        <span className={style.cart__totalPriceUnit}>원</span>
      </div>
    </div>
  );
};

export default CartTotal;
