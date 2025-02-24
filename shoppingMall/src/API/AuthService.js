import axios from "axios";

const API_URL = "http://localhost:8080";

export const logIn = async (email, password) => {
  //   try {
  //     const response = await axios.post(`${API_URL}/api/login`, {
  //       email: email,
  //       password: password,
  //     });

  //     if (response.data.token) {
  //       localStorage.setItem("token", response.data.token);
  //     }

  //     return response.data;
  //   } catch (error) {
  //     console.error("Login fail: ", error.response?.data || error.message);
  //     throw error;
  //   }

  return new Promise((resolve) => {
    setTimeout(() => {
      const fakeUser = {
        token: "fake-jwt-token",
        user: {
          email,
          name: "test",
        },
      };

      localStorage.setItem("token", fakeUser.token);
      localStorage.setItem("isAuthenticated", "true");
      resolve(fakeUser);
    }, 1000);
  });
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};
