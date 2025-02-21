import React from "react";
import style from "./Cart.module.css";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

const Cart = () => {
  return (
    <div className={style.cart}>
      <h1 className={style.cart__title}>장바구니</h1>
      <div className={style.cart__container}>
        <div className={style.cart__header}>
          <div
            className={`${style.cart__column} ${style["cart__column--info"]}`}
          >
            상품명
          </div>
          <div
            className={`${style.cart__column} ${style["cart__column--quantity"]}`}
          >
            수량
          </div>
          <div
            className={`${style.cart__column} ${style["cart__column--total"]}`}
          >
            합계
          </div>
          <div
            className={`${style.cart__column} ${style["cart__column--cancel"]}`}
          >
            취소
          </div>
        </div>
        <CartList />
        <CartTotal />
        <div className={style.cart__actions}>
          <button className={style.cart__orderButton}>
            <a href="#">주문하기</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
