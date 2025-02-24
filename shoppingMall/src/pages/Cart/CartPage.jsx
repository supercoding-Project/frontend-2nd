import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../MyPage/MyPage.module.css";
import UserInfo from "../../components/mypage/UserInfo";
import Cart from "../../components/mypage/Cart";
import SalesList from "../../components/mypage/SalesList";
import OrderList from "../../components/mypage/OrderList";

const CartPage = () => {
  const [user, setUser] = useState(null); // 유저 상태
  const [books, setBooks] = useState([]); //책 데이터
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  const [activeTab, setActiveTab] = useState("cart"); // 클릭된 탭 추적

  const loggedInUserId = "user-001"; // 로그인한 유저의 ID (예시)

  // 유저 데이터를 JSON 파일에서 가져오는 axios 요청
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/dummyData.json`);
        const userData = response.data.users.find(
          (user) => user.id === loggedInUserId
        );
        const booksData = response.data.books;
        setUser(userData); // 받아온 유저 데이터를 상태에 저장
        setBooks(booksData); // 전체 책 데이터를 상태에 저장
        setLoading(false); // 로딩 완료
      } catch (err) {
        setError("유저 정보를 불러오는 데 실패했습니다.");
        setLoading(false);
      }
    };

    fetchUserData();
  }, [loggedInUserId]);

  // 장바구니에 있는 상품의 정보와 해당 책 정보를 매칭
  const getCartBooks = () => {
    if (user && books.length > 0) {
      return user.cart.map((cartItem) => {
        const book = books.find((book) => book.id === cartItem.productId);
        return {
          ...cartItem,
          ...book, // 책 정보를 추가
        };
      });
    }
    return [];
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab); // 클릭된 탭을 상태로 설정
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={style.mypage}>
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
            <li
              className={activeTab === "orderList" ? style.active : ""}
              onClick={() => handleTabClick("orderList")}
            >
              구매목록
            </li>
          </ul>
        </aside>
        <section className={style.mypageSection}>
          {activeTab === "userInfo" && <UserInfo user={user} />}
          {activeTab === "cart" && (
            <Cart cart={user.cart} books={getCartBooks()} />
          )}
          {activeTab === "salesList" && (
            <SalesList salesList={user.soldBooks} />
          )}
          {activeTab === "orderList" && (
            <OrderList orderList={user.purchasedBooks} />
          )}
        </section>
      </div>
    </div>
  );
};

export default CartPage;
