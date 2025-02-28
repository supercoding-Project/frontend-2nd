import React from "react";
import { useDispatch } from "react-redux";
import { updateCartItem, removeCartItem } from "../../store/cartSlice";
import style from "./CartList.module.css";

const CartList = ({ cart, setCart, isOrderPage }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    );
    dispatch(updateCartItem({ productId, quantity: newQuantity }));
  };

  const handleRemove = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId)
    );
    dispatch(removeCartItem(productId));
  };

  return (
    <div className={style.cart__list}>
      {cart.length === 0 ? (
        <p>장바구니에 상품이 없습니다.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.productId} className={style.cart__item}>
              <div
                className={`${style.cart__itemDetails} ${
                  isOrderPage
                    ? style.orderModeItemDetails
                    : style.defaultModeItemDetails
                }`}
              >
                <div className={style.product__image}>
                  <img
                    src={item.imageUrl || "https://placehold.co/250x300"}
                    alt="상품 이미지"
                  />
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

              <div
                className={`${style.cart__control} ${
                  isOrderPage
                    ? style.orderModeControl
                    : style.defaultModeControl
                }`}
              >
                <div className={style.cart__quantity}>
                  <button
                    className={`${style.cart__quantityButton} ${style["cart__quantity-button--decrease"]}`}
                    onClick={() =>
                      handleQuantityChange(
                        item.productId,
                        Math.max(item.quantity - 1, 1)
                      )
                    }
                  >
                    -
                  </button>
                  <span className={style.cart__count}>{item.quantity}</span>
                  <button
                    className={`${style.cart__quantityButton} ${style["cart__quantity-button--increase"]}`}
                    onClick={() =>
                      handleQuantityChange(item.productId, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div
                className={`${style.cart__price} ${
                  isOrderPage ? style.orderModePrice : style.defaultModePrice
                }`}
              >
                {(item.salePrice * item.quantity).toLocaleString()} 원
              </div>

              <div
                className={`${style.cart__cancel} ${
                  isOrderPage ? style.orderModeCancel : style.defaultModeCancel
                }`}
              >
                <button onClick={() => handleRemove(item.productId)}>X</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartList;
