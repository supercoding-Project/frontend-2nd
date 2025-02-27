import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { CiImageOff } from "react-icons/ci";
import BookList from "../../components/book/BookList";

const Detail = () => {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { bookId } = useParams();

  const badgeColor = {
    최상: "#3471F0",
    상: "#6293E7",
    중: "#738DB5",
    하: "#6D7480",
  };

  const getCurrentBook = () => {
    return axios.get(`http://localhost:5981/api/display/all/${bookId}`);
  };

  const getBooks = () => {
    return axios.get("http://localhost:5981/api/display/all");
  };

  const fetchBook = async () => {
    setIsLoading(true);

    try {
      const res = await axios.all([getCurrentBook(), getBooks()]);
      const randomBooks = res[1].data.content.sort(() => Math.random() - 0.5).slice(0, 6);
      setBooks(randomBooks);
      setCurrentBook(res[0].data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBook();
  }, [bookId]);

  return (
    <div className={styles["container"]}>
      <div>
        <span className={styles["badge"]} style={{ background: `${badgeColor[currentBook.status]}` }}>
          {currentBook.status}급
        </span>
        <h4 className={styles["title"]}>{currentBook.title}</h4>
        <div className={styles["sub-title"]}>
          <p>저자 {currentBook.author}</p>
          <span>|</span>
          <p>출판사 {currentBook.publisher}</p>
          <span>|</span>
          <p>출간일 {currentBook.publishDate}</p>
          <span>|</span>
          <p>상품등록일 {currentBook.createdAt}</p>
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
            <p>3,500원 (판매자 상품 30,000원 이상 구매 시 무료배송)</p>
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
          {books.map((item) => (
            <Link to={`/detail/${item.id}`} key={item.id}>
              <li className={styles["random-book"]}>
                <div>
                  <span style={{ background: badgeColor[item.status] }}>{item.status}급</span>
                  {item.imageUrl ? <img src={item.imageUrl} alt={item.title} draggable="false" /> : <CiImageOff />}
                </div>
                <h4>{item.title}</h4>
                <p>{item.author}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Detail;
