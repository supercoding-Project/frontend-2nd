import React from "react";
import style from "./MyPage.module.css";
import UserInfo from "./UserInfo";
import Cart from "./Cart";
import SalesList from "./SalesList";

const MyPage = () => {
  return (
    <div className={style.mypage}>
      <h1>내정보</h1>
      <div className={style.mypageContainer}>
        <aside className={style.btnAside}>
          <ul>
            <li className={style.active}>기본정보</li>
            <li>장바구니</li>
            <li>판매목록</li>
          </ul>
        </aside>
        <section className={style.mypageSection}>
          <UserInfo />
          <Cart />
          <SalesList />
        </section>
      </div>
    </div>
  );
};

export default MyPage;
