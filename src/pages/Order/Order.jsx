import React from "react";
import style from "./Order.module.css";
import CartList from "../../components/CartList";
import CartTotal from "../../components/CartTotal";

const Order = () => {
  return (
    <div className={style.order}>
      <div className={style.orderContainer}>
        <div className={style.orderUser}>
          <h3>수령인 정보</h3>
          <div className={`${style.orderUserRow} ${style.orderUserName}`}>
            <label htmlFor="userName">수령인</label>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="이름을 입력해주세요."
            />
          </div>
          <div className={`${style.orderUserRow} ${style.orderUserAddress}`}>
            <label htmlFor="userAddress">주소</label>
            <label htmlFor="postalCode" style={{ display: "none" }}>
              우편번호
            </label>
            <label htmlFor="userAddress2" style={{ display: "none" }}>
              상세주소
            </label>
            <div className={style.inputs}>
              <input
                type="number"
                name="postalCode"
                id="postalCode"
                className={style.postalCode}
                placeholder="우편번호"
              />
              <input
                type="text"
                name="userAddress"
                id="userAddress"
                className={style.userAddress}
                placeholder="주소지"
              />
            </div>
            <input
              type="text"
              name="userAddress2"
              id="userAddress2"
              className={style.userAddress2}
              placeholder="상세주소"
            />
          </div>
          <div className={`${style.orderUserRow} ${style.orderUserEmail}`}>
            <label htmlFor="userEmail">이메일</label>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="이메일을 입력해주세요."
            />
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

          <div
            className={`${style.orderPaymentRow} ${style.orderPaymentCardNumber}`}
          >
            <label htmlFor="cardNumber">카드번호</label>
            <div
              className={`${style.orderPaymentCardNumberInputs} ${style.inputs}`}
            >
              <input type="number" name="cardNumber" id="cardNumber1" />
              <div className={style.orderPaymentDash}>-</div>
              <input type="number" name="cardNumber" id="cardNumber2" />
              <div className={style.orderPaymentDash}>-</div>
              <input type="number" name="cardNumber" id="cardNumber3" />
            </div>
          </div>
          <div className={style.orderPaymentRow}>
            <div className={style.orderPaymentExpiration}>
              <label htmlFor="cardDate">유효기간 (MM/YY)</label>
              <div
                className={`${style.orderPaymentExpirationInputs} ${style.inputs}`}
              >
                <input type="number" name="cardDate" id="cardDateYY" />
                <div className={style.orderPaymentDash}>/</div>
                <input type="number" name="cardDate" id="cardDateMM" />
              </div>
            </div>
            <div className={style.orderPaymentCvc}>
              <label htmlFor="cardCVC">CVC 번호</label>
              <div className={`${style.orderPaymentCvcInputs} ${style.inputs}`}>
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
        <CartList isOrderPage={true} />
        <CartTotal />
      </div>
    </div>
  );
};

export default Order;
