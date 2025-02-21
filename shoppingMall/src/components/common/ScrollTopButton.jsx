import React, { useState, useEffect } from "react";
import { RiArrowUpCircleFill } from "react-icons/ri";
import styles from "./ScrollTopButton.module.css";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={`${styles.scrollTop} ${visible ? styles.show : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <RiArrowUpCircleFill size={50} />
    </button>
  );
};

export default ScrollTopButton;
