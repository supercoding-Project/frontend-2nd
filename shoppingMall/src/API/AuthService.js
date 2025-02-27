import axios from "axios";

const API_URL = " http://43.200.136.205:8080";

// 🚀 Fake JWT 로그인 (테스트용)
export const fakeLogIn = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fakeUser = {
        token: "fake-jwt-token-123456", // ✅ 가짜 액세스 토큰
        refreshToken: "fake-refresh-token-654321", // ✅ 가짜 리프레시 토큰
        email: email,
        userName: "Test User",
        isAuthenticated: true,
      };

      // ✅ localStorage에 저장
      localStorage.setItem("token", fakeUser.token);
      localStorage.setItem("refresh_token", fakeUser.refreshToken);
      localStorage.setItem("email", fakeUser.email);
      localStorage.setItem("userName", fakeUser.userName);
      localStorage.setItem("isAuthenticated", "true");

      console.log("✅ Fake login successful!", fakeUser);
      resolve(fakeUser);
    }, 1000); // 1초 딜레이 (네트워크 요청처럼 보이게)
  });
};

export const loginWithFakeJWT = (useFake = false) => {
  return useFake ? fakeLogIn : logIn;
};

export const logIn = async (email, password) => {
  try {
    // 실제 로그인 API 요청 보내기
    const response = await axios.post(`${API_URL}/api/login`, {
      email: email,
      password: password,
    });

    console.log(response);

    const access_token = response.headers["authorization"];
    const refresh_token = response.headers["set-cookie"]
      ?.split("=")[1]
      ?.split(";")[0];

    // 응답 데이터에서 필요한 정보를 받아와 localStorage에 저장
    const { email: userEmail, userName, isAuth, message } = response.data;

    if (isAuth === "true") {
      localStorage.setItem("token", access_token); // 액세스 토큰 저장
      localStorage.setItem("refresh_token", refresh_token); // 리프레시 토큰 저장
      localStorage.setItem("email", userEmail); // 이메일 저장
      localStorage.setItem("userName", userName); // 사용자 이름 저장
      localStorage.setItem("isAuthenticated", "true"); // 인증 상태 저장
    }

    return { access_token, refresh_token, email: userEmail, userName, message }; // 필요한 데이터 리턴
  } catch (error) {
    console.error(
      "Login failed:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const kakaoLogin = async (code) => {
  try {
    const response = await axios.post(`${API_URL}/oauth2/authorization/kakao`, {
      code: code,
    });

    console.log(response);

    const { token, email, userName } = response.data;

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      localStorage.setItem("userName", userName);
      localStorage.setItem("isAuthenticated", "true");

      // ✅ 로그인 성공 시 메인 페이지로 이동
      window.location.href = "/";
    }

    return response.data;
  } catch (error) {
    console.error("Kakao login failed:", error.response?.data || error.message);
    throw error;
  }
};

export const googleLogin = async (code) => {
  try {
    const response = await axios.post(
      `${API_URL}/oauth2/authorization/google`,
      {
        code: code,
      }
    );

    console.log(response);

    const { token, email, userName } = response.data;

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      localStorage.setItem("userName", userName);
      localStorage.setItem("isAuthenticated", "true");

      // ✅ 로그인 성공 시 메인 페이지로 이동
      window.location.href = "/";
    }

    return response.data;
  } catch (error) {
    console.error(
      "Google login failed:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("email");
  localStorage.removeItem("userName");
  localStorage.removeItem("isAuthenticated");
  window.location.href = "/"; // 로그아웃 후 홈으로
};
