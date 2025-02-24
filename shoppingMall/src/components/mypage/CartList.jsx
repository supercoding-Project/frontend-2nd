import React, { useState, useEffect } from "react";
import style from "./CartList.module.css";

const CartList = ({ isOrderPage, setCart, cart, books }) => {
  console.log(cart, books);

  return (
    <div className={style.cart__list}>
      {books.length === 0 ? (
        <p>장바구니에 넣은 상품이 없습니다.</p> // 책이 없으면 이 메시지 표시
      ) : (
        <ul>
          {books.map((book) => {
            const cartItem = cart.find((b) => b.productId === book.productId);
            if (!cartItem) return null;

            const [cartQuantity, setCartQuantity] = useState(cartItem.quantity);
            const [cartPrice, setCartPrice] = useState(
              Number(book.salePrice) * cartQuantity
            );

            useEffect(() => {
              setCartPrice(Number(book.salePrice) * cartQuantity);
            }, [cartQuantity, book.salePrice]);

            const handleRemove = (productId) => {
              setCart((prevCart) =>
                prevCart.filter((item) => item.productId !== productId)
              );
              console.log(productId); // 삭제된 productId 확인용
            };

            const handleQuantityChange = (productId, newQuantity) => {
              setCart((prevCart) =>
                prevCart.map((item) =>
                  item.productId === productId
                    ? { ...item, quantity: newQuantity }
                    : item
                )
              );
              setCartQuantity(newQuantity); // 수량도 상태로 업데이트
            };

            // useEffect(() => {
            //   console.log(cart); // cart가 변경될 때마다 출력
            // }, [cart]);

            return (
              <li key={book.id} className={style.cart__item}>
                <div
                  className={`${style.cart__itemDetails} ${
                    isOrderPage
                      ? style.orderModeItemDetails
                      : style.defaultModeItemDetails
                  }`}
                >
                  <div className={style.product__image}>
                    <img src="https://placehold.co/250x300" alt="상품 이미지" />
                  </div>
                  <div className={style.product__details}>
                    <div className={style.product__name}>{book.title}</div>
                    <div className={style.product__info}>
                      <div className={style.product__author}>
                        {book.author}
                        <span> 지음</span>
                      </div>
                      /
                      <div className={style.product__publisher}>
                        {book.publisher}
                      </div>
                      /<div className={style.product__date}>{book.date}</div>
                    </div>
                    <div className={style.product__price}>
                      <span className={style.product__priceValue}>
                        {Number(book.salePrice).toLocaleString()}
                      </span>
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
                      className={` 
                      ${style["cart__quantity-button"]} 
                      ${style["cart__quantity-button--decrease"]}
                    `}
                      onClick={() =>
                        handleQuantityChange(
                          cartItem.productId,
                          Math.max(cartQuantity - 1, 1)
                        )
                      }
                    >
                      -
                    </button>
                    <span className={style.cart__count}>{cartQuantity}</span>
                    <button
                      className={` 
                      ${style["cart__quantity-button"]} 
                      ${style["cart__quantity-button--increase"]}
                    `}
                      onClick={() =>
                        handleQuantityChange(
                          cartItem.productId,
                          cartQuantity + 1
                        )
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
                  {cartPrice.toLocaleString()}
                </div>
                <div
                  className={`${style.cart__cancel} ${
                    isOrderPage
                      ? style.orderModeCancel
                      : style.defaultModeCancel
                  }`}
                >
                  <button onClick={() => handleRemove(book.productId)}>
                    X
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CartList;
