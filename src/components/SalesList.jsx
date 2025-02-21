import React from "react";
import style from "./SalesList.module.css";

const SalesList = () => {
  return (
    <div className={style.salesList}>
      <h1>판매목록</h1>
      <div className="">
        <span>(상품리스트)</span>
      </div>
    </div>
  );
};

export default SalesList;
