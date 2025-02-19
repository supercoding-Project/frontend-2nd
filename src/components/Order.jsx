import React from "react";
import style from "./Order.module.css";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

const Order = () => {
  return (
    <div className={style.order}>
      <div className={style.orderContainer}>
        <div className={style.orderUser}>
          <h3>수령인 정보</h3>
          <div className={style.orderUserRow}>
            <div className={style.orderUserName}>
              <label htmlFor="userName">수령인</label>
              <input type="text" name="userName" id="userName" />
            </div>
          </div>
          <div className={style.orderUserRow}>
            <div className={style.orderUserPostalCode}>
              <label htmlFor="postalCode">우편번호</label>
              <input type="number" name="postalCode" id="postalCode" />
            </div>
            <div className={style.orderUserAddress}>
              <label htmlFor="userAddress">주소지</label>
              <input type="text" name="userAddress" id="userAddress" />
            </div>
          </div>
          <div className={style.orderUserRow}>
            <div className={style.orderUserAddressDetail}>
              <label htmlFor="userAddress2">상세주소</label>
              <input type="text" name="userAddress2" id="userAddress2" />
            </div>
          </div>
          <div className={style.orderUserRow}>
            <div className={style.orderUserEmail}>
              <label htmlFor="userEmail">이메일</label>
              <input type="email" name="userEmail" id="userEmail" />
            </div>
          </div>
          <div className={style.orderUserEmailAgree}>
            <input type="checkbox" name="userAgree" id="userAgree" />
            <label htmlFor="userAgree">
              결제와 관련된 정보를 이메일로 받겠습니다.
            </label>
          </div>
        </div>

        <div className={style.orderPayment}>
          <h3>결제 정보</h3>

          <div className={style.orderPaymentRow}>
            <div className={style.orderPaymentCardNumber}>
              <label htmlFor="cardNumber">카드번호</label>
              <div
                className={`${style["orderPaymentCardNumberInputs"]} ${
                  style[`inputs`]
                }`}
              >
                <input type="number" name="cardNumber" id="cardNumber1" />
                <div className={style.orderPaymentDash}>-</div>
                <input type="number" name="cardNumber" id="cardNumber2" />
                <div className={style.orderPaymentDash}>-</div>
                <input type="number" name="cardNumber" id="cardNumber3" />
              </div>
            </div>
          </div>
          <div className={style.orderPaymentRow}>
            <div className={style.orderPaymentExpiration}>
              <label htmlFor="cardDate">유효기간 (MM/YY)</label>
              <div
                className={`${style["orderPaymentExpirationInputs"]} ${
                  style[`inputs`]
                }`}
              >
                <input type="number" name="cardDate" id="cardDateYY" />
                <div className={style.orderPaymentDash}>/</div>
                <input type="number" name="cardDate" id="cardDateMM" />
              </div>
            </div>
            <div className={style.orderPaymentCvc}>
              <label htmlFor="cardCVC">CVC 번호</label>
              <div
                className={`${style["orderPaymentCvcInputs"]} ${
                  style[`inputs`]
                }`}
              >
                <input type="number" name="cardCVC" id="cardCVC" />
              </div>
            </div>
          </div>
        </div>

        <div className={style.orderAgree}>
          <input type="checkbox" name="orderAgree" id="orderAgree" />
          <label htmlFor="orderAgree">주문내용 확인 및 결제 동의</label>
        </div>

        <div className={style.orderButton}>
          <button>결제하기</button>
        </div>
      </div>
      <div className={style.orderCart}>
        <CartList />
        <CartTotal />
      </div>
    </div>
  );
};

export default Order;
