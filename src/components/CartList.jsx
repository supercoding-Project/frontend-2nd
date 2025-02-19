import React from "react";
import style from "./CartList.module.css";

const CartList = () => {
  return (
    <div className={style.cart__list}>
      <ul>
        <li className={`${style.cart__item} ${style.product}`}>
          <div className={style.cart__itemDetails}>
            <div className={style.product__image}>
              <img src="#" alt="상품 이미지" />
            </div>
            <div className={style.product__details}>
              <div className={style.product__name}>도서이름</div>
              <div className={style.product__info}>
                <div className={style.product__author}>000 지음</div>/
                <div className={style.product__publisher}>출판사</div>/
                <div className={style.product__date}>2000.01</div>
              </div>
              <div className={style.product__price}>
                <span className={style.product__priceValue}>15,000</span>
                <span className={style.product__priceUnit}>원</span>
              </div>
            </div>
          </div>
          <div className={style.cart__control}>
            <div className={style.cart__quantity}>
              <button
                className={`
            ${style["cart__quantity-button"]} 
            ${style["cart__quantity-button--decrease"]}
            `}
              >
                -
              </button>
              <span className={style.cart__count}>1</span>
              <button
                className={`
            ${style["cart__quantity-button"]} 
            ${style["cart__quantity-button--increase"]}
            `}
              >
                +
              </button>
            </div>
          </div>
          <div className={style.cart__price}>15,000</div>
          <div className={style.cart__cancel}>
            <button>X</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartList;
