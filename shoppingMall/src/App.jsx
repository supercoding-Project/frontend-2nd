import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import BookList from "./pages/BookList";
import Login from "./pages/login/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Layout>
  );
}
export default App;
