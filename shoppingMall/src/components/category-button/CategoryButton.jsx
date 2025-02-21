import styles from "./CategoryButton.module.css";

const CategoryButton = ({ children, onSelected, onSelect }) => {
  return (
    <li className={`${styles["category"]} ${onSelected ? styles["active"] : undefined}`}>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default CategoryButton;
