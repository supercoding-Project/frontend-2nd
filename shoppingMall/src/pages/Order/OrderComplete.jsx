import React from "react";
import style from "./OrderComplete.module.css";
import { Link } from "react-router-dom";

const OrderComplete = () => {
  return (
    <div className={style.orderComplete}>
      <div className={style.completeHeader}>
        <div className={style.completeIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        주문이 완료되었습니다.
      </div>
      <div className={style.completeMain}>
        <div
          className={`${style.orderComplete__column} ${style.orderComplete__productDetails}`}
        >
          <h3>상품 정보</h3>
          <div className={style.productList}>
            <ul>
              <li>
                <div className={style.product__image}>
                  <img src="https://placehold.co/250x300" alt="상품 이미지" />
                </div>
                <div className={style.product__info}>
                  <div
                    className={`${style.product__infoRow} ${style.product__infoRow1}`}
                  >
                    <div className={style.product__name}>도서이름</div>
                  </div>
                  <div
                    className={`${style.product__infoRow} ${style.product__infoRow2}`}
                  >
                    <span className={style.product__author}>000 지음</span> /
                    <span className={style.product__publisher}>출판사</span> /
                    <span className={style.product__date}>2000.01</span>
                  </div>
                  <div
                    className={`${style.product__infoRow} ${style.product__infoRow3}`}
                  >
                    <div className={style.product__price}>
                      <span className={style.product__priceValue}>15,000</span>
                      <span className={style.product__priceUnit}>원</span>
                    </div>
                    <div className={style.product__priceIcon}>X</div>
                    <div className={style.product__quantity}>
                      <span className={style.product__quantityValue}>1</span>
                      <span className={style.product__quantityUnit}>권</span>
                    </div>
                  </div>
                </div>
                <div className={style.product__totalPrice}>
                  <span className={style.product__totalValue}>15,000</span>
                  <span className={style.product__totalUnit}>원</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`${style.orderComplete__column} ${style.orderComplete__Details}`}
        >
          <div className={style.deliveryDetailWrap}>
            <h3>배송 정보</h3>
            <div className={style.deliveryDetail}>
              <div className={style.deliveryDetail__row}>
                <div className={style.deliveryDetail__label}>받으시는 분</div>
                <div className={style.deliveryDetail__docs}>000</div>
              </div>
              <div className={style.deliveryDetail__row}>
                <div className={style.deliveryDetail__label}>이메일</div>
                <div className={style.deliveryDetail__docs}>0000@00000.000</div>
              </div>
              <div className={style.deliveryDetail__row}>
                <div className={style.deliveryDetail__label}>주소</div>
                <div className={style.deliveryDetail__docs}>
                  <div className={style.postcode}>우편번호</div>
                  <div className={style.address}>
                    <div className={style.address__main}>주소지</div>
                    <div className={style.address__detail}>상세주소</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.paymentDetailWrap}>
            <h3>결제 정보</h3>
            <div className={style.paymentDetail}>
              <div className={style.paymentDetail__row}>
                <div className={style.paymentDetail__label}>결제일시</div>
                <div className={style.paymentDetail__docs}>
                  0000.00.00 00:00:00
                </div>
              </div>
              <div className={style.paymentDetail__row}>
                <div className={style.paymentDetail__label}>주문번호</div>
                <div className={style.paymentDetail__docs}>000000000000</div>
              </div>
              <div className={style.paymentDetail__row}>
                <div className={style.paymentDetail__label}>주문상태</div>
                <div className={style.paymentDetail__docs}>결제완료</div>
              </div>
              <div className={style.paymentDetail__row}>
                <div className={style.paymentDetail__label}>결제금액</div>
                <div
                  className={`${style.paymentDetail__docs} ${style.paymentAmount}`}
                >
                  45,000원
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.buttonGroup}>
        <div className={style.btn__home}>
          <Link to="/">홈으로</Link>
        </div>
        <div className={style.btn__cart}>
          <Link to="/cart">장바구니</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
