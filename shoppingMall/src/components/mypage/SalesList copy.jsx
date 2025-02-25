import React, { useState } from "react";
import style from "./SalesList.module.css";

const SalesList = ({ salesList, books }) => {
  const [activeItem, setActiveItem] = useState(null); // 클릭된 항목을 추적하는 상태

  const isListToggle = (productId) => {
    // 클릭된 항목이 이미 활성화되어 있으면 비활성화, 아니면 활성화
    setActiveItem((prevItem) => (prevItem === productId ? null : productId));
  };

  return (
    <div className={style.salesList}>
      <h3>판매목록</h3>
      <div className={style.sale__header}></div>
      {books.length === 0 ? (
        <p>판매중인 상품이 없습니다.</p> // 책이 없으면 이 메시지 표시
      ) : (
        <ul>
          {books.map((book) => {
            // salesList에서 book.productId에 해당하는 항목을 찾음
            const saleItem = salesList.find(
              (item) => item.productId === book.productId
            );

            return (
              <li key={book.productId}>
                <div
                  className={style.saleContainer}
                  onClick={() => isListToggle(book.productId)}
                >
                  <div className={style.sale__itemDetails}>
                    <div className={style.product__image}>
                      <img
                        src="https://placehold.co/250x300"
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
                        /<div className={style.product__date}>{book.date}</div>
                      </div>
                      <div className={style.product__price}>
                        <span className={style.product__priceValue}>
                          {Number(book.salePrice).toLocaleString()}
                        </span>
                        <span className={style.product__priceUnit}>원</span>
                      </div>
                    </div>
                  </div>
                  <div className={style.sale__itemState}>
                    {saleItem && saleItem.isSold ? (
                      <div className={style.state__soldOut}>판매완료</div>
                    ) : (
                      <div className={style.state__onSale}>판매중</div>
                    )}
                  </div>
                  <div className={style.sale__itemBtn}>
                    <button>수정</button>
                  </div>
                </div>
                <div
                  className={`${style.additionalInfo} ${activeItem === book.productId ? style.active : ""}`}
                >
                  <p>구매한 사람 목록</p>
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
