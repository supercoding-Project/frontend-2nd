import React from "react";
import MainBanner from "../../components/Home/MainBanner";
import BookCategories from "../../components/Home/BookCategories";
import PopularBooks from "../../components/Home/PopularBooks";
import BookController from "../../components/book/BookController";

const Home = () => {
  return (
    <div>
      <MainBanner />
      {/* <BookCategories /> */}
      {/* <PopularBooks /> */}
      <BookController />
    </div>
  );
};

export default Home;
