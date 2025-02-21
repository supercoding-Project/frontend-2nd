import { Link } from "react-router-dom";
import styles from "./BookList.module.css";
import CategoryButton from "../category-button/CategoryButton";

const BookList = ({ title, books, bgColor, handleSelect, currentCategory }) => {
  return (
    <section
      className={styles["container"]}
      style={{ background: `${title === "새로 등록된 도서" ? "#fafafa" : undefined}` }}
    >
      {title === "새로 등록된 도서" ? (
        <h2>{title}</h2>
      ) : (
        <div>
          <h2
            style={{ cursor: "pointer" }}
            onClick={() => handleSelect("전체 도서")}
            className={`${currentCategory === "전체 도서" ? styles["active"] : undefined}`}
          >
            {title}
          </h2>
          <ul className={styles["category-list"]}>
            <CategoryButton
              currentCategory={currentCategory}
              onSelected={currentCategory === "최상급"}
              onSelect={() => handleSelect("최상급")}
            >
              최상급
            </CategoryButton>
            <CategoryButton
              currentCategory={currentCategory}
              onSelected={currentCategory === "상급"}
              onSelect={() => handleSelect("상급")}
            >
              상급
            </CategoryButton>
            <CategoryButton
              currentCategory={currentCategory}
              onSelected={currentCategory === "중급"}
              onSelect={() => handleSelect("중급")}
            >
              중급
            </CategoryButton>
            <CategoryButton
              currentCategory={currentCategory}
              onSelected={currentCategory === "하급"}
              onSelect={() => handleSelect("하급")}
            >
              하급
            </CategoryButton>
            <CategoryButton
              currentCategory={currentCategory}
              onSelected={currentCategory === "낮은 가격순"}
              onSelect={() => handleSelect("낮은 가격순")}
            >
              낮은 가격순
            </CategoryButton>
            <CategoryButton
              currentCategory={currentCategory}
              onSelected={currentCategory === "높은 가격순"}
              onSelect={() => handleSelect("높은 가격순")}
            >
              높은 가격순
            </CategoryButton>
          </ul>
        </div>
      )}

      <ul className={styles["book-container"]}>
        {books.map((item) => (
          <Link to={`/detail/${item.id}`} key={item.id}>
            <li className={styles["book"]}>
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
