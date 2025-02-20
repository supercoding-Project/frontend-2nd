import React from "react";
import styles from "./MainBanner.module.css";

const MainBanner = () => {
  return (
    <section className={styles.banner}>
      <h1>중고 도서를 쉽게 사고팔자!</h1>
      <p>합리적인 가격으로 원하는 책을 찾아보세요.</p>
      <button className={styles.button}>바로 시작하기</button>
    </section>
  );
};

export default MainBanner;
