import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import BookList from "./pages/BookList";
import Login from "./pages/login/Login";
import MyPage from "./pages/MyPage/MyPage";
import Order from "./pages/Order/Order";
import AddProduct from "./pages/AddProduct/AddProduct";
import SocialLoginCallback from "./components/login/SocialLoginCallback";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/logIn" element={<Login />} />
        <Route
          path="/oauth2/authorization/google"
          element={<SocialLoginCallback />}
        />
        <Route path="/auth/kakao" element={<SocialLoginCallback />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/order" element={<Order />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </Layout>
  );
}
export default App;
