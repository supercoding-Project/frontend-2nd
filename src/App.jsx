import { useState } from "react";
import AddProduct from "./pages/AddProduct/AddProduct";
import Order from "./pages/Order/Order";
import MyPage from "./pages/MyPage/MyPage";

function App() {
  return (
    <>
      <AddProduct />
      <MyPage />
      <Order></Order>
    </>
  );
}

export default App;
