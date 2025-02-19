import React from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div>
        <div className={styles.section}>
          <Link to="/signUp">회원가입</Link>
          <Link to="/logIn">로그인</Link>
        </div>
        <div className={styles.container}>
          <Link to="/">
            <img
              src="https://www.bookoa.co.kr/assets/images/icons/bold.svg"
              alt="logo"
              className={styles.img}
            />
          </Link>
          <input
            className={styles.search}
            type="text"
            placeholder="검색어를 입력해 주세요"
          ></input>
          <div className={styles.mypage}>
            <Link to="/mypage/like">
              <VscHeart size="30" title="찜목록" />
            </Link>
            <Link to="/cart">
              <BsCart2 size="30" title="장바구니" />
            </Link>
            <Link to="/mypage">
              <BsFillPersonFill size="30" title="마이페이지" color="#013989" />
            </Link>
          </div>
        </div>
        <nav className={styles.navbar}>
          <Link to="/category">분야찾기</Link>
          <Link to="/category/price">가격대별 코너</Link>
          <Link to="/category/event">이벤트</Link>
          <Link to="/category/myBookStore">나의 서점</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
