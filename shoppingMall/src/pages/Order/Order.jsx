import React, { useState } from "react";
import style from "./Order.module.css";
import CartList from "../../components/mypage/CartList";
import CartTotal from "../../components/mypage/CartTotal";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    postalCode: "",
    address1: "",
    address2: "",
    email: "",
    cardNumber1: "",
    cardNumber2: "",
    cardNumber3: "",
    cardDateYY: "",
    cardDateMM: "",
    cardCVC: "",
    orderAgree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "orderAgree") {
        newErrors[key] = true;
      }
    });

    if (!formData.orderAgree) {
      newErrors.orderAgree = true;
    }

    // 카드번호 체크 (하나라도 비어있으면 오류)
    if (
      !formData.cardNumber1 ||
      !formData.cardNumber2 ||
      !formData.cardNumber3
    ) {
      newErrors.cardNumber = true;
    }

    // 유효기간 체크 (하나라도 비어있으면 오류)
    if (!formData.cardDateMM || !formData.cardDateYY) {
      newErrors.cardDate = true;
    }

    // CVC 체크
    if (!formData.cardCVC) {
      newErrors.cardCVC = true;
    }

    // 주소 체크 (하나라도 비어있으면 오류)
    if (!formData.postalCode || !formData.address1 || !formData.address2) {
      newErrors.address = true;
    }

    return newErrors;
  };

  const btnOrderClick = () => {
    const newErrors = validateForm();
    setErrors(newErrors);

    // 'orderAgree'가 체크되지 않았을 때
    if (!formData.orderAgree) {
      alert("주문 결제에 대한 동의를 진행해주세요.");
      return; // 동의를 하지 않으면 추가 처리를 진행하지 않음
    }

    if (Object.keys(newErrors).length === 0) {
      alert("상품이 등록되었습니다!");
      // 주문 처리 로직 추가
    }
  };

  return (
    <div className={style.order}>
      <div className={style.orderCart}>
        <CartList isOrderPage={true} />
        <CartTotal />
      </div>
      <div className={style.orderContainer}>
        <div className={style.orderUser}>
          <h3>배송 정보</h3>
          <div className={style.orderUserRow}>
            <label htmlFor="name">받으시는 분</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="이름을 입력해주세요."
              className={errors.name ? style.errorInput : ""}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span className={style.errorMessage}>이름을 입력하세요.</span>
            )}
          </div>
          <div className={style.orderUserRow}>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="이메일을 입력해주세요."
              className={errors.email ? style.errorInput : ""}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className={style.errorMessage}>이메일을 입력하세요.</span>
            )}
          </div>
          <div className={style.orderUserRow}>
            <label htmlFor="postalCode">주소</label>
            <div className={style.inputs}>
              <input
                type="number"
                name="postalCode"
                id="postalCode"
                placeholder="우편번호"
                className={errors.postalCode ? style.errorInput : ""}
                value={formData.postalCode}
                onChange={handleChange}
              />
              <input
                type="text"
                name="address1"
                id="address1"
                placeholder="주소지"
                className={errors.address1 ? style.errorInput : ""}
                value={formData.address1}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="address2"
              id="address2"
              placeholder="상세주소"
              className={errors.address2 ? style.errorInput : ""}
              value={formData.address2}
              onChange={handleChange}
            />
            {errors.address && (
              <span className={style.errorMessage}>주소를 입력하세요.</span>
            )}
          </div>
        </div>

        <div className={style.orderPayment}>
          <h3>결제 정보</h3>
          <div
            className={`${style.orderPaymentRow} ${style.orderPaymentCardNumber}`}
          >
            <label htmlFor="cardNumber1">카드번호</label>
            <div
              className={`${style.orderPaymentCardNumberInputs} ${
                style.inputs
              } ${errors.cardNumber ? style.errorInput : ""}`}
            >
              <input
                type="number"
                name="cardNumber1"
                id="cardNumber1"
                value={formData.cardNumber1}
                onChange={handleChange}
              />
              <div className={style.orderPaymentDash}>-</div>
              <input
                type="number"
                name="cardNumber2"
                id="cardNumber2"
                value={formData.cardNumber2}
                onChange={handleChange}
              />
              <div className={style.orderPaymentDash}>-</div>
              <input
                type="number"
                name="cardNumber3"
                id="cardNumber3"
                value={formData.cardNumber3}
                onChange={handleChange}
              />
              {errors.cardNumber && (
                <span className={style.errorMessage}>
                  카드번호를 올바르게 입력하세요.
                </span>
              )}
            </div>
          </div>
          <div className={style.orderPaymentRow}>
            <div className={style.orderPaymentExpiration}>
              <label htmlFor="cardDateMM">유효기간 (MM/YY)</label>
              <div
                className={`${style.orderPaymentExpirationInputs} ${
                  style.inputs
                } ${errors.cardDate ? style.errorInput : ""}`}
              >
                <input
                  type="number"
                  name="cardDateYY"
                  id="cardDateYY"
                  value={formData.cardDateYY}
                  onChange={handleChange}
                />
                <div className={style.orderPaymentDash}>/</div>
                <input
                  type="number"
                  name="cardDateMM"
                  id="cardDateMM"
                  value={formData.cardDateMM}
                  onChange={handleChange}
                />
                {errors.cardDate && (
                  <span className={style.errorMessage}>
                    유효기간을 올바르게 입력하세요.
                  </span>
                )}
              </div>
            </div>

            {/* CVC 번호 입력 */}
            <div className={style.orderPaymentCvc}>
              <label htmlFor="cardCVC">CVC 번호</label>
              <div
                className={`${style.orderPaymentCvcInputs} ${style.inputs} ${
                  errors.cardCVC ? style.errorInput : ""
                }`}
              >
                <input
                  type="number"
                  name="cardCVC"
                  id="cardCVC"
                  value={formData.cardCVC}
                  onChange={handleChange}
                />
                {errors.cardCVC && (
                  <span className={style.errorMessage}>
                    CVC 번호를 입력하세요.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={style.orderAgree}>
          <input
            type="checkbox"
            name="orderAgree"
            id="orderAgree"
            checked={formData.orderAgree}
            onChange={handleChange}
          />
          <label htmlFor="orderAgree">주문내용 확인 및 결제 동의</label>
        </div>

        <div className={style.orderButton}>
          <button onClick={btnOrderClick}>결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
