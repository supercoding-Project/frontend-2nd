import axios from "axios";

const API_URL = "https://43.200.136.205:8080";

export const logIn = async (email, password) => {
  try {
    // 실제 로그인 API 요청 보내기
    const response = await axios.post(`${API_URL}/api/login`, {
      email: email,
      password: password,
    });

    console.log(response);

    const {
      access_token,
      refresh_token,
      email: userEmail,
      username,
      isAuth,
      message,
    } = response.data;

    // 응답 데이터에서 필요한 정보를 받아와 localStorage에 저장
    if (isAuth === "true") {
      localStorage.setItem("token", access_token); // 액세스 토큰 저장
      localStorage.setItem("refresh_token", refresh_token); // 리프레시 토큰 저장
      localStorage.setItem("email", userEmail); // 이메일 저장
      localStorage.setItem("userName", username); // 사용자 이름 저장
      localStorage.setItem("isAuthenticated", "true"); // 인증 상태 저장
    }

    return { access_token, refresh_token, email: userEmail, username, message }; // 필요한 데이터 리턴
  } catch (error) {
    console.error(
      "Login failed:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// export const kakaoLogin = async (code) => {
//   try {
//     const response = await axios.post(`${API_URL}/oauth2/authorization/kakao`, {
//       code: code,
//     });

//     console.log(response);

//     const { token, email, userName } = response.data;

//     if (token) {
//       localStorage.setItem("token", token);
//       localStorage.setItem("email", email);
//       localStorage.setItem("userName", userName);
//       localStorage.setItem("isAuthenticated", "true");

//       // ✅ 로그인 성공 시 메인 페이지로 이동
//       window.location.href = "/";
//     }

//     return response.data;
//   } catch (error) {
//     console.error("Kakao login failed:", error.response?.data || error.message);
//     throw error;
//   }
// };

// export const googleLogin = async (code) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/oauth2/authorization/google`,
//       {
//         code: code,
//       }
//     );

//     console.log(response);

//     const { token, email, userName } = response.data;

//     if (token) {
//       localStorage.setItem("token", token);
//       localStorage.setItem("email", email);
//       localStorage.setItem("userName", userName);
//       localStorage.setItem("isAuthenticated", "true");

//       // ✅ 로그인 성공 시 메인 페이지로 이동
//       window.location.href = "/";
//     }

//     return response.data;
//   } catch (error) {
//     console.error(
//       "Google login failed:",
//       error.response?.data || error.message
//     );
//     throw error;
//   }
// };

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("email");
  localStorage.removeItem("userName");
  localStorage.removeItem("isAuthenticated");
  window.location.href = "/"; // 로그아웃 후 홈으로
};
