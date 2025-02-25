import React, { useState, useEffect } from "react";
import style from "./SalesList.module.css";
import axios from "axios";
const API_URL = "/api/v1/product/myproductlist";

const SalesList = () => {
  const [activeItem, setActiveItem] = useState(null); // 클릭된 항목을 추적하는 상태
  const [books, setBooks] = useState([]);
  // console.log(books);

  useEffect(() => {
    const token = localStorage.getItem("token"); // 예시
    axios
      .get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`, // 헤더에 토큰 추가
        },
      })
      .then((response) => {
        console.log(response.data); // 데이터 형태 확인
        setBooks(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
      });
  }, []);

  return (
    <div className={style.salesList}>
      <h3>판매목록</h3>
      <div className={style.sale__header}></div>
      {books.length === 0 ? (
        <p>판매중인 상품이 없습니다.</p> // 책이 없으면 이 메시지 표시
      ) : (
        <ul>
          {books.map((book) => {
            return (
              <li key={book.product_id}>
                <div className={style.saleContainer}>
                  <div className={style.sale__itemDetails}>
                    <div className={style.product__image}>
                      <img
                        src={book.imageUrl || "https://placehold.co/250x300"}
                        alt="상품 이미지"
                      />
                    </div>
                    <div className={style.product__details}>
                      <div className={style.product__name}>{book.title}</div>
                      <div className={style.product__info}>
                        <div className={style.product__author}>
                          {book.author}
                          <span> 지음</span>
                        </div>
                        /
                        <div className={style.product__publisher}>
                          {book.publisher}
                        </div>
                        /
                        <div className={style.product__date}>
                          {new Date(book.publish_date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className={style.product__price}>
                        <span className={style.product__priceValue}>
                          {Number(book.sale_price).toLocaleString()}
                        </span>
                        <span className={style.product__priceUnit}>원</span>
                      </div>
                    </div>
                  </div>
                  <div className={style.sale__itemState}>
                    {book.stock_quantity === 0 ? (
                      <div className={style.state__soldOut}>판매완료</div>
                    ) : (
                      <div className={style.state__onSale}>판매중</div>
                    )}
                  </div>
                  <div className={style.sale__itemBtn}>
                    <button>수정</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SalesList;
