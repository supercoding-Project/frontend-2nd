import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ openModal, setOpenModal }) => {
  const handleModalClose = () => {
    setOpenModal(false);
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.modalHeader}>
          <div className={styles.title}>상담시간 안내</div>
          <button className={styles.closeBtn} onClick={handleModalClose}>
            <img
              src="https://www.bookoa.co.kr/assets/images/icons/24-px-grey-5-close.svg"
              alt="닫기"
            />
          </button>
          {!openModal ? setOpenModal(true) : null}
        </div>
        <hr className={styles.separator} />
        <div className={styles.csInfo}>
          <ul>
            <li>■ 평일 오전 9시 ~ 오후 6시</li>
            <li>■ 점심시간 : 오전 12시 30분 ~ 오후 1시 30분</li>
            <li>■ 매달 첫째주 금요일 점심시간 : 오후 12시 ~ 오후 2시</li>
            <li>■ 매달 마지막주 수요일 : 오전 9시 ~ 오후 1시</li>
            <li>■ 휴무 : 토요일, 일요일, 공휴일</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
