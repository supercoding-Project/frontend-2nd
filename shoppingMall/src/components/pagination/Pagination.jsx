import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, handlePagination }) => {
  return (
    <div className={styles["container"]}>
      <button onClick={() => handlePagination("prev")} className={styles["pagination-button"]}>
        <FaAngleLeft />
      </button>
      <span>{currentPage}</span>
      <button onClick={() => handlePagination("next")} className={styles["pagination-button"]}>
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
