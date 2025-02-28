import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SocialLoginCallback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loginWithSocial = async () => {
      if (code) {
        const currentURL = window.location.href;
        const platform = currentURL.includes("kakao")
          ? "kakao"
          : currentURL.includes("google")
            ? "google"
            : null;

        if (platform) {
          try {
            setLoading(true);

            // 백엔드로 로그인 인증 코드 전송
            const response = await axios.post(
              `/oauth2/authorization/${platform}`,
              {
                platform, // kakao or google
                code, // 인증 코드
              }
            );

            // 로그인 성공 후 토큰 처리 (예: JWT 토큰)
            const { accessToken } = response.data;
            localStorage.setItem("accessToken", accessToken); // 로컬 스토리지에 토큰 저장

            // 로그인 후, 메인 페이지로 리디렉션
            navigate("/home");
          } catch (error) {
            console.error("로그인 처리 실패:", error);
            alert("로그인 처리 중 오류가 발생했습니다.");
          } finally {
            setLoading(false);
          }
        } else {
          console.error("지원되지 않는 로그인 플랫폼입니다.");
        }
      }
    };

    loginWithSocial();
  }, [code, navigate]);

  return (
    <div>
      {loading ? (
        <div>로그인 처리 중...</div>
      ) : (
        <div>로그인 성공! 메인 페이지로 이동 중...</div>
      )}
    </div>
  );
};

export default SocialLoginCallback;
