import axios from "axios";
import { useEffect, useState } from "react";
import CardList from "./BookList";

const BookController = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get("books.json");
        setBooks(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const newlyRegisteredBooks = books.slice(books.length - 6);

  const bgColor = {
    최상급: "#386CD6",
    상급: "#719CE7",
    중급: "#8196BC",
    하급: "#787F8B",
  };

  return (
    <div>
      <CardList title="새로 등록된 도서" books={newlyRegisteredBooks} bgColor={bgColor} />
      <CardList title="전체 도서" books={books} bgColor={bgColor} />
    </div>
  );
};

export default BookController;
