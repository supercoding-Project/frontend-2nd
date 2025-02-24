import React from "react";
import style from "./OrderList.module.css";

const OrderList = () => {
  return (
    <div className={style.orderList}>
      <h3>구매목록</h3>
      <div className="">
        <span>(상품리스트)</span>
      </div>
    </div>
  );
};

export default OrderList;
