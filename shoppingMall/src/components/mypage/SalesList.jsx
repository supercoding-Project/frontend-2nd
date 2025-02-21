import React from "react";
import style from "./SalesList.module.css";

const SalesList = () => {
  return (
    <div className={style.salesList}>
      <h3>판매목록</h3>
      <div className="">
        <span>(상품리스트)</span>
      </div>
    </div>
  );
};

export default SalesList;
