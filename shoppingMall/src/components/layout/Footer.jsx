import React, { useState } from "react";
import styles from "./Footer.module.css";
import Modal from "../common/Modal";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.right}>
          <ul className={styles.navbar}>
            <li>회사소개</li>
            <li>개인정보취급방침</li>
            <li>이용약관</li>
            <li>고객센터</li>
          </ul>
        </div>
        <div className={styles.left}>
          <div className={styles.h3}>고객만족센터</div>
          <span className={styles.h2}>
            8282-8282
            <span className={styles.btnContainer}>
              <button className={styles.btnContent} onClick={handleModalOpen}>
                상담시간 안내
              </button>
              {openModal ? (
                <Modal openModal={openModal} setOpenModal={setOpenModal} />
              ) : null}
            </span>
          </span>
        </div>
      </div>
      <p className={styles.copy}>
        © 2025. Supercoding- Project All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
