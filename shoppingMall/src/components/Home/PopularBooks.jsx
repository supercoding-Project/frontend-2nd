import React from "react";
import styles from "./PopularBooks.module.css";

const books = [
  { id: 1, title: "책 1", price: "10,000원" },
  { id: 2, title: "책 2", price: "15,000원" },
  { id: 3, title: "책 3", price: "12,000원" },
];

const PopularBooks = () => {
  return (
    <section className={styles.popular}>
      <h2 className={styles.h2}>인기 도서</h2>
      <div className={styles.grid}>
        {books.map((book) => (
          <div key={book.id} className={styles.bookCard}>
            <div className={styles.bookImage}>📖</div>
            <h3>{book.title}</h3>
            <p>{book.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularBooks;
