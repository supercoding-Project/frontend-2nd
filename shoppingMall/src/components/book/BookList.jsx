import styles from "./BookList.module.css";
import { CiImageOff } from "react-icons/ci";
import { Link } from "react-router-dom";
import Pagination from "../pagination/Pagination";

const BookList = ({ title, books, badgeColor, currentPage, handlePagination, totalPage }) => {
  return (
    <section className={`${styles["container"]} ${title === "새로 등록된 도서" && styles["container-bg"]}`}>
      <div className={styles["title-container"]}>
        <h2>{title}</h2>
      </div>
      <ul className={styles["card-container"]}>
        {books.map((item) => (
          <Link to={`/detail/${item.productId}`} key={item.productId}>
            <li className={styles["card"]}>
              <span className={styles["badge"]} style={{ background: badgeColor[item.status] }}>
                {item.status}급
              </span>
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={item.title} draggable="false" className={styles["card-image"]} />
              ) : (
                <div className={styles["card-image-container"]}>
                  <CiImageOff />
                </div>
              )}
              <h4 className={styles["card-title"]}>{item.title}</h4>
              <p className={styles["card-price"]}>{item.salePrice}원</p>
            </li>
          </Link>
        ))}
      </ul>
      {title === "전체 도서" && totalPage > 1 && (
        <Pagination currentPage={currentPage} handlePagination={handlePagination} />
      )}
    </section>
  );
};

export default BookList;
