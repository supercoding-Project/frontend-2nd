import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { CiImageOff } from "react-icons/ci";
import { AiOutlineLoading } from "react-icons/ai";
import { LiaMinusSolid } from "react-icons/lia";
import { LiaPlusSolid } from "react-icons/lia";

const Detail = () => {
  const [randomBooks, setRandomBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(1);

  const { bookId } = useParams();

  const badgeColor = {
    최상: "#3471F0",
    상: "#6293E7",
    중: "#738DB5",
    하: "#6D7480",
  };

  useEffect(() => {
    const fetchRandomBooks = async () => {
      setIsLoading(true);

      try {
        const res = await axios.get("/api/display/all");
        const books = res.data.content
          .sort(() => Math.random() - 0.5)
          .slice(0, 6);
        setRandomBooks(books);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRandomBooks();
  }, []);

  useEffect(() => {
    const fetchCurrentBook = async () => {
      setIsLoading(true);

      try {
        const res = await axios.get(`/api/display/${bookId}`);
        setCurrentBook(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    window.scrollTo(0, 0);
    fetchCurrentBook();
  }, [bookId]);

  const handleIncreaseCount = () => {
    if (count !== currentBook.stockQuantity) {
      setCount((prevCount) => prevCount + 1);
    } else {
      alert("현재 재고를 초과하여 주문할 수 없습니다.");
    }
  };

  const handleDecreaseCount = () => {
    if (count !== 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  if (isLoading) {
    return (
      <div className={`${styles["loading"]} ${styles["fz-80"]}`}>
        <AiOutlineLoading />
      </div>
    );
  }

  if (error) {
    return <div className={styles["error"]}>{error.message}</div>;
  }

  return (
    <div className={styles["container"]}>
      <div>
        <span
          className={styles["badge"]}
          style={{ background: `${badgeColor[currentBook.status]}` }}
        >
          {currentBook.status}급
        </span>
        <h4 className={styles["title"]}>{currentBook.title}</h4>
        <div className={styles["sub-title"]}>
          <p>저자 {currentBook.author}</p>
          <span>|</span>
          <p>출판사 {currentBook.publisher}</p>
          <span>|</span>
          <p>출간일 {new Date(currentBook.publishDate).toLocaleDateString()}</p>
          <span>|</span>
          <p>
            상품등록일 {new Date(currentBook.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className={styles["card-detail"]}>
        <img src={currentBook.imageUrl} alt={currentBook.title} />
        <div>
          <div className={styles["info"]}>
            <p>재고</p>
            <p>{currentBook.stockQuantity} 개</p>
          </div>
          <div className={styles["info"]}>
            <p>판매가</p>
            <p className={styles["price"]}>{currentBook.salePrice}원</p>
          </div>
          <div className={styles["info"]}>
            <p>정가</p>
            <p>{currentBook.originalPrice}원</p>
          </div>
          <div className={styles["info"]}>
            <p>배송비</p>
            <p>3500원 (판매자 상품 30,000원 이상 구매 시 무료배송)</p>
          </div>
        </div>
      </div>
      <div className={styles["description"]}>
        <p>판매자 설명</p>
        <p>{currentBook.description}</p>
      </div>

      <div className={styles["container"]}>
        <p className={styles["random-books-title"]}>추천 도서</p>
        <ul className={styles["random-books-container"]}>
          {randomBooks.map((item) => (
            <Link to={`/detail/${item.productId}`} key={item.productId}>
              <li className={styles["random-book"]}>
                <div>
                  <span style={{ background: badgeColor[item.status] }}>
                    {item.status}급
                  </span>
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      draggable="false"
                    />
                  ) : (
                    <CiImageOff />
                  )}
                </div>
                <h4>{item.title}</h4>
                <p>{item.author}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className={styles["buy-container"]}>
        <div className={styles["count-container"]}>
          <p>수량</p>
          <button onClick={handleDecreaseCount}>
            <LiaMinusSolid />
          </button>
          <span>{count}</span>
          <button onClick={handleIncreaseCount}>
            <LiaPlusSolid />
          </button>
        </div>
        <div className={styles["price-container"]}>
          <p>결제예정금액</p>
          <p>
            {currentBook.salePrice * count}
            <span>원</span>
          </p>
        </div>
        <div className={styles["action-container"]}>
          <button>장바구니</button>
          <button>바로구매</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
