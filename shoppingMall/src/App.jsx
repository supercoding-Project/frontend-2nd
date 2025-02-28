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
import SignUp from "./pages/sign-up/SignUp";
import Detail from "./pages/detail/Detail";
import BookController from "./components/book/BookController";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookList" element={<BookController />} />
        <Route path="/logIn" element={<Login />} />
        {/* <Route path="/oauth2/code/google" element={<SocialLoginCallback />} />
        <Route path="/oauth2/code/kakao" element={<SocialLoginCallback />} /> */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/order" element={<Order />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/detail/:bookId" element={<Detail />} />
      </Routes>
    </Layout>
  );
}
export default App;
