import React from "react";
import { useDispatch } from "react-redux";
import { updateCartItem, removeCartItem } from "../../store/cartSlice";
import style from "./CartList.module.css";

const CartList = ({ cart, setCart }) => {
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
              <div className={style.product__details}>
                <img
                  src={item.imageUrl || "https://placehold.co/250x300"}
                  alt="상품 이미지"
                  className={style.product__image}
                />
                <div className={style.product__info}>
                  <div className={style.product__name}>{item.title}</div>
                  <div className={style.product__author}>
                    {item.author} 지음
                  </div>
                  <div className={style.product__publisher}>
                    {item.publisher}
                  </div>
                  <div className={style.product__price}>
                    {Number(item.salePrice).toLocaleString()} 원
                  </div>
                </div>
              </div>
              <div className={style.cart__control}>
                <button
                  className={style.cart__quantityButton}
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
                  className={style.cart__quantityButton}
                  onClick={() =>
                    handleQuantityChange(item.productId, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <div className={style.cart__price}>
                {(item.salePrice * item.quantity).toLocaleString()} 원
              </div>
              <div className={style.cart__cancel}>
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
