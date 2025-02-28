import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Cart.module.css";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (!email) {
      setError("이메일 정보가 없습니다.");
      setLoading(false);
      return;
    }

    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      const response = await axios.get(
        `https://43.200.136.205:8080/api/v1/mypage/${email}/cart`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setCart(response.data);
    } catch (err) {
      console.error("장바구니 데이터 로딩 오류:", err);
      setError("장바구니 정보를 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={style.cart}>
      <h3 className={style.cart__title}>장바구니</h3>
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
        <CartList cart={cart} setCart={setCart} />
        <CartTotal cart={cart} />
        <div className={style.cart__actions}>
          <button className={style.cart__orderButton}>
            <Link to="/order">주문하기</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
