import React from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";
import { BsFillPersonFill } from "react-icons/bs";
import styles from "./Header.module.css";
import { authActions } from "../../store/index.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const email = localStorage.getItem("email");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("email");
    dispatch(authActions.logOut());
    navigate("/", { replace: false });
  };
  return (
    <header className={styles.Header}>
      <div>
        {isAuth ? (
          <div className={styles.section}>
            <Link to="/mypage" className={styles.LinkLogIn}>
              UserName {email}
            </Link>
            <Link onClick={handleLogOut} className={styles.LinkSignUp}>
              로그아웃
            </Link>
          </div>
        ) : (
          <div className={styles.section}>
            <Link to="/signUp" className={styles.LinkSignUp}>
              회원가입
            </Link>
            <Link to="/logIn" className={styles.LinkLogIn}>
              로그인
            </Link>
          </div>
        )}
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
              <VscHeart size="30" title="찜목록" color="lightGray" />
            </Link>
            <Link to="/cart">
              <BsCart2 size="30" title="장바구니" color="lightGray" />
            </Link>
            <Link to="/mypage">
              <BsFillPersonFill size="30" title="마이페이지" color="#237af6" />
            </Link>
          </div>
        </div>
        <nav className={styles.navbar}>
          <Link to="/bookList" className={styles.LinkLogIn}>
            전체 도서
          </Link>
          <Link to="/category/price" className={styles.LinkLogIn}>
            상태별 코너
          </Link>
          <Link to="/category/event" className={styles.LinkLogIn}>
            이벤트
          </Link>
          <Link to="/category/myBookStore" className={styles.LinkLogIn}>
            나의 서점
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
