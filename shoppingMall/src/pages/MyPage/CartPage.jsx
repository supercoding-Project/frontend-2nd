import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import style from "./MyPage.module.css";
import UserInfo from "../../components/mypage/UserInfo";
import Cart from "../../components/mypage/Cart";
import SalesList from "../../components/mypage/SalesList";
import OrderList from "../../components/mypage/OrderList";

const MyPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("cart");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기
    const email = localStorage.getItem("email"); // 로컬 스토리지에서 이메일 가져오기
    if (!token || !email) {
      setError("로그인이 필요합니다.");
      setLoading(false);
      return;
    }
    fetchUserData(token, email);
  }, []);

  const fetchUserData = async (token, email) => {
    console.log("사용할 이메일:", email);
    console.log("사용할 토큰:", token);

    try {
      const response = await axios.get(
        `http://43.200.136.205:8080/api/v1/mypage/${email}`, // ✅ email 기반 API 요청
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setUser(response.data);
      setLoading(false);
    } catch (err) {
      console.error("API 요청 오류:", err);
      setError("유저 정보를 불러오는 데 실패했습니다.");
      setLoading(false);
    }
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={style.mypage}>
      <div className={style.mypageContainer}>
        <aside className={style.btnAside}>
          <ul>
            {["userInfo", "cart", "salesList", "orderList"].map((tab) => (
              <li
                key={tab}
                className={activeTab === tab ? style.active : ""}
                onClick={() => setActiveTab(tab)}
              >
                {
                  {
                    userInfo: "기본정보",
                    cart: "장바구니",
                    salesList: "판매목록",
                    orderList: "구매목록",
                  }[tab]
                }
              </li>
            ))}
          </ul>
        </aside>
        <section className={style.mypageSection}>
          {activeTab === "userInfo" && <UserInfo user={user} />}
          {activeTab === "cart" && <Cart />}
          {activeTab === "salesList" && <SalesList />}
          {activeTab === "orderList" && <OrderList />}
        </section>
      </div>
    </div>
  );
};

export default MyPage;
