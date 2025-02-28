import React from "react";
import { RiGoogleFill, RiKakaoTalkFill } from "react-icons/ri";
import styles from "./SocialLogin.module.css";

const SocialLogin = () => {
  const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const kakaoLink = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_ID = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
  const googleLink = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${GOOGLE_CLIENT_ID}
		&redirect_uri=${GOOGLE_REDIRECT_ID}
		&response_type=code&scope=email profile`;

  const handleKakaoLogin = () => {
    console.log("kakao login");
    console.log(KAKAO_REST_API_KEY);
    window.location.href = kakaoLink;
  };

  const handleGoogleLogin = () => {
    console.log("google login");
    window.location.href = googleLink;
  };

  return (
    <div className={styles.socialLogin}>
      <button className={styles.google} onClick={handleGoogleLogin}>
        <RiGoogleFill size={24} /> 구글 로그인
      </button>
      <button className={styles.kakao} onClick={handleKakaoLogin}>
        <RiKakaoTalkFill size={24} /> 카카오 로그인
      </button>
    </div>
  );
};

export default SocialLogin;
