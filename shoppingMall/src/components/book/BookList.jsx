import { Link } from "react-router-dom";
import styles from "./BookList.module.css";

const BookList = ({ title, books, bgColor }) => {
  return (
    <section
      className={styles["container"]}
      style={{ background: `${title === "새로 등록된 도서" ? "#fafafa" : undefined}` }}
    >
      <h2>{title}</h2>
      <ul className={styles["book-container"]}>
        {books.map((item) => (
          <Link to={`/detail/${item.id}`}>
            <li key={item.id} className={styles["book"]}>
              <span className={styles["badge"]} style={{ background: `${bgColor[item.status]}` }}>
                {item.status}
              </span>
              <img src={item.imgUrl} alt={item.title} className={styles["book-img"]} />
              <h3 className={styles["book-title"]}>{item.title}</h3>
              <p className={styles["book-price"]}>{item.price}원</p>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default BookList;
