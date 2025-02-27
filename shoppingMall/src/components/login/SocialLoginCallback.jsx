import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { googleLogin } from "../../API/AuthService";

const SocialLoginCallback = () => {
  const [searchParams] = useSearchParams();
  const provider = searchParams.get("provider");
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      const currentURL = window.location.href;

      if (currentURL.includes("kakao")) {
        kakaoLogin(code);
      } else if (currentURL.includes("google")) {
        googleLogin(code);
      } else {
        console.error("지원되지 않는 로그인");
      }
    }
  }, [code]);

  return <div>로그인 처리 중...</div>;
};

export default SocialLoginCallback;
