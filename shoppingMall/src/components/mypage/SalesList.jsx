import React, { useState, useEffect } from "react";
import style from "./SalesList.module.css";
import axios from "axios";

const API_URL = "http://43.200.136.205:8080/api/v1/product/myproductlist";

const SalesList = () => {
  const [activeItem, setActiveItem] = useState(null); // 클릭된 항목을 추적하는 상태
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("로그인이 필요합니다.");
      setLoading(false);
      return;
    }

    fetchSalesData(token);
  }, []);

  const fetchSalesData = async (token) => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBooks(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      console.error("API 요청 실패:", err);
      setError("판매 목록을 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const toggleItem = (productId) => {
    setActiveItem(activeItem === productId ? null : productId);
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={style.salesList}>
      <h3>판매목록</h3>
      <div className={style.sale__header}></div>
      {books.length === 0 ? (
        <p>판매중인 상품이 없습니다.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.product_id}>
              <div className={style.saleContainer}>
                <div
                  className={style.sale__itemDetails}
                  onClick={() => toggleItem(book.product_id)}
                >
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
              {activeItem === book.product_id && (
                <div className={style.buyerList}>
                  <h4>구매한 사람 목록</h4>
                  {book.buyers && book.buyers.length > 0 ? (
                    <ul>
                      {book.buyers.map((buyer) => (
                        <li key={buyer.id}>
                          {buyer.name} -{" "}
                          {new Date(buyer.purchase_date).toLocaleDateString()}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>구매한 사람이 없습니다.</p>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SalesList;
