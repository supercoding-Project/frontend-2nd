import React from "react";
import styles from "./BookCategories.module.css";

const categories = ["소설", "만화", "경제", "자기계발", "IT", "외국어"];

const BookCategories = () => {
  return (
    <section className={styles.categories}>
      <h2 className={styles.h2}>카테고리별 도서</h2>
      <div className={styles.list}>
        {categories.map((category) => (
          <button key={category} className={styles.categoryButton}>
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BookCategories;
