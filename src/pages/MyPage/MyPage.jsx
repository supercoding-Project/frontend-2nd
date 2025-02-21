import React, { useState } from "react";
import style from "./MyPage.module.css";
import UserInfo from "../../components/UserInfo";
import Cart from "../../components/Cart";
import SalesList from "../../components/SalesList";

const MyPage = () => {
  // activeTab 상태를 추가하여 클릭된 탭을 추적
  const [activeTab, setActiveTab] = useState("userInfo");

  const handleTabClick = (tab) => {
    setActiveTab(tab); // 클릭된 탭을 상태로 설정
  };

  return (
    <div className={style.mypage}>
      <h1>내정보</h1>
      <div className={style.mypageContainer}>
        <aside className={style.btnAside}>
          <ul>
            <li
              className={activeTab === "userInfo" ? style.active : ""}
              onClick={() => handleTabClick("userInfo")}
            >
              기본정보
            </li>
            <li
              className={activeTab === "cart" ? style.active : ""}
              onClick={() => handleTabClick("cart")}
            >
              장바구니
            </li>
            <li
              className={activeTab === "salesList" ? style.active : ""}
              onClick={() => handleTabClick("salesList")}
            >
              판매목록
            </li>
          </ul>
        </aside>
        <section className={style.mypageSection}>
          {activeTab === "userInfo" && <UserInfo />}
          {activeTab === "cart" && <Cart />}
          {activeTab === "salesList" && <SalesList />}
        </section>
      </div>
    </div>
  );
};

export default MyPage;
