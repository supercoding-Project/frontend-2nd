import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
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
          <div className={styles.h2}>8282-8282</div>
        </div>
        <div>
          <button className={styles.btnContent}>카카오톡 문의</button>
        </div>
      </div>
      <p className={styles.copy}>
        © 2025. Supercoding- Project All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
