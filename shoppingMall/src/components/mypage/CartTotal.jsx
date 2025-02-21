import React from "react";
import style from "./CartTotal.module.css";

const CartTotal = () => {
  return (
    <div className={style.cart__total}>
      <div className={style.cart__totalLabel}>총 합계</div>
      <div className={style.cart__totalPrice}>
        <span className={style.cart__totalPriceValue}>15,000</span>
        <span className={style.cart__totalPriceUnit}>원</span>
      </div>
    </div>
  );
};

export default CartTotal;
