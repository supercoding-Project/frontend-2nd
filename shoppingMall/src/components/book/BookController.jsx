import axios from "axios";
import { useEffect, useState } from "react";
import BookList from "./BookList";
import { AiOutlineLoading } from "react-icons/ai";
import styles from "./BookController.module.css";

const BookController = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const badgeColor = {
    최상: "#3471F0",
    상: "#6293E7",
    중: "#738DB5",
    하: "#6D7480",
  };

  const NewlyAddedBooks = books.slice(books.length - 6);

  const startIndex = (currentPage - 1) * 18;
  const endIndex = startIndex + 18;
  const currentBooks = books.slice(startIndex, endIndex);

  const fetchBooks = async () => {
    setIsLoading(true);

    try {
      const res = await axios.get(
        "https://43.200.136.205:8080/api/display/all"
      );
      setBooks(res.data.content);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const totalPage = Math.ceil(books.length / 18);

  const handlePagination = (selectedButton) => {
    if (selectedButton === "prev" && currentPage !== 1) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    } else if (selectedButton === "next" && currentPage !== totalPage) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 987);
  }, [currentPage]);

  if (isLoading) {
    return (
      <div className={`${styles["container"]} ${styles["fz-80"]}`}>
        <AiOutlineLoading />
      </div>
    );
  }

  if (error) {
    return <div className={styles["container"]}>{error.message}</div>;
  }

  return (
    <>
      <BookList
        title={"새로 등록된 도서"}
        books={NewlyAddedBooks}
        badgeColor={badgeColor}
      />
      <BookList
        title={"전체 도서"}
        books={currentBooks}
        badgeColor={badgeColor}
        currentPage={currentPage}
        handlePagination={handlePagination}
        totalPage={totalPage}
      />
    </>
  );
};

export default BookController;
