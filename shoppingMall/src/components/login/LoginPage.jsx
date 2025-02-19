import React from "react";
import { Link } from "react-router-dom";
import { RiGoogleFill, RiKakaoTalkFill } from "react-icons/ri";
import ScrollTopButton from "../common/ScrollTopButton";
import EyeOpen from "../../assets/Icons/eye.svg";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>로그인</h2>
        <form>
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            className={styles.input}
          />
          <div className={styles.passwordWrapper}>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className={styles.input}
            />
            <img src={EyeOpen} className={styles.eye} />
            <button type="submit" className={styles.loginButton}>
              로그인
            </button>
          </div>
        </form>
        <div className={styles.links}>
          <Link to="/signup">회원가입</Link>
          <Link to="/find-password">아이디 찾기</Link>
          <Link to="/find-password">비밀번호 찾기</Link>
        </div>
        <div className={styles.socialLogin}>
          <button className={styles.google}>
            <RiGoogleFill size={24} /> 구글 로그인
          </button>
          <button className={styles.kakao}>
            <RiKakaoTalkFill size={24} /> 카카오 로그인
          </button>
        </div>
      </div>
      <ScrollTopButton />
    </div>
  );
};

export default LoginPage;
