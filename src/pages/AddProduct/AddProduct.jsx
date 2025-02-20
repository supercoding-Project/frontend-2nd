import React, { useState } from "react";
import style from "./AddProduct.module.css";

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const [condition, setCondition] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [date, setDate] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({
    categories: false,
    name: false,
    img: false,
    author: false,
    publisher: false,
    date: false,
    originalPrice: false,
    salePrice: false,
    quantity: false,
    description: false,
    condition: false,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
      document.querySelector(`.${style.bookImgLabel}`).style.backgroundColor =
        "#90CEC1";
    } else {
      setImg(null);
      document.querySelector(`.${style.bookImgLabel}`).style.backgroundColor =
        "";
    }
  };

  const btnAddClick = () => {
    const newErrors = {
      categories: category.trim() === "",
      name: name.trim() === "",
      img: !img,
      author: author.trim() === "",
      publisher: publisher.trim() === "",
      date: date.trim() === "",
      originalPrice: originalPrice.trim() === "",
      salePrice: salePrice.trim() === "",
      quantity: quantity.trim() === "",
      description: description.trim() === "",
      condition: condition.trim() === "",
    };

    setErrors(newErrors);

    // 오류가 있으면 메시지를 표시
    if (Object.values(newErrors).some((error) => error)) {
      // 에러 메시지 출력 (추가적인 로직을 여기에 작성 가능)
    } else {
      alert("상품이 등록되었습니다!");
      // 상품 등록 로직
    }
  };

  return (
    <div className={style.addProduct}>
      <h1>상품등록</h1>

      <div className={style.addRow}>
        <label htmlFor="bookCategories" className={style.bookCategoriesLabel}>
          카테고리
        </label>
        <select
          id="bookCategories"
          className={`${style.bookCategoriesInput} ${
            errors.categories ? style.errorInput : ""
          }`}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">카테고리를 선택하세요</option>
          <option value="fiction">소설</option>
          <option value="non-fiction">논픽션</option>
          <option value="history">역사</option>
        </select>
        {errors.categories && (
          <span className={style.errorMessage}>
            도서 카테고리를 선택하세요.
          </span>
        )}
      </div>

      <div className={style.addRow}>
        <label htmlFor="bookName" className={style.bookNameLabel}>
          도서명
        </label>
        <input
          type="text"
          name="bookName"
          id="bookName"
          placeholder="도서명을 입력해주세요"
          className={`${style.bookNameInput} ${
            errors.name ? style.errorInput : ""
          }`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && (
          <span className={style.errorMessage}>도서명을 입력하세요.</span>
        )}

        <label
          htmlFor="bookImg"
          className={`${style.bookImgLabel} ${
            errors.img ? style.errorInput : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </label>
        <input
          type="file"
          name="bookImg"
          id="bookImg"
          className={`${style.bookImgInput}`}
          onChange={handleImageChange}
        />
      </div>

      <div className={style.addRow}>
        <label htmlFor="bookCondition" className={style.bookConditionLabel}>
          도서상태
        </label>
        <select
          name="bookCondition"
          id="bookCondition"
          className={`${style.bookConditionInput} ${
            errors.categories ? style.errorInput : ""
          }`}
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        >
          <option value="">상태를 선택하세요</option>
          <option value="new">새 책</option>
          <option value="used">중고 책</option>
        </select>
        {errors.condition && (
          <span className={style.errorMessage}>도서 상태를 선택하세요.</span>
        )}
      </div>

      <div className={style.addRow}>
        <label htmlFor="bookAuthor" className={style.bookAuthorLabel}>
          저자
        </label>
        <input
          type="text"
          name="bookAuthor"
          id="bookAuthor"
          placeholder="저자를 입력해주세요"
          className={`${style.bookAuthorInput} ${
            errors.author ? style.errorInput : ""
          }`}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {errors.author && (
          <span className={style.errorMessage}>저자를 입력하세요.</span>
        )}
      </div>

      <div className={style.addRow}>
        <label htmlFor="bookPublisher" className={style.bookPublisherLabel}>
          출판사
        </label>
        <input
          type="text"
          name="bookPublisher"
          id="bookPublisher"
          placeholder="출판사를 입력해주세요"
          className={`${style.bookPublisherInput} ${
            errors.publisher ? style.errorInput : ""
          }`}
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
        {errors.publisher && (
          <span className={style.errorMessage}>출판사를 입력하세요.</span>
        )}
      </div>

      <div className={style.addRow}>
        <label htmlFor="bookDate" className={style.bookDateLabel}>
          출간일
        </label>
        <input
          type="date"
          name="bookDate"
          id="bookDate"
          placeholder="출간일을 입력해주세요"
          className={`${style.bookDateInput} ${
            errors.date ? style.errorInput : ""
          }`}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {errors.date && (
          <span className={style.errorMessage}>출간일을 입력하세요.</span>
        )}
      </div>

      <div className={style.addRow}>
        <label
          htmlFor="bookOriginalPrice"
          className={style.bookOriginalPriceLabel}
        >
          정가
        </label>
        <input
          type="number"
          name="bookOriginalPrice"
          id="bookOriginalPrice"
          placeholder="정가를 입력해주세요"
          className={`${style.bookOriginalPriceInput} ${
            errors.originalPrice ? style.errorInput : ""
          }`}
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
        />
        {errors.originalPrice && (
          <span className={style.errorMessage}>정가를 입력하세요.</span>
        )}
      </div>

      <div className={style.addRow}>
        <label htmlFor="bookSalePrice" className={style.bookSalePriceLabel}>
          판매가
        </label>
        <input
          type="number"
          name="bookSalePrice"
          id="bookSalePrice"
          placeholder="판매가를 입력해주세요"
          className={`${style.bookSalePriceInput} ${
            errors.salePrice ? style.errorInput : ""
          }`}
          value={salePrice}
          onChange={(e) => setSalePrice(e.target.value)}
        />
        {errors.salePrice && (
          <span className={style.errorMessage}>판매가를 입력하세요.</span>
        )}
      </div>

      <div className={style.addRow}>
        <label htmlFor="bookQuantity" className={style.bookQuantityLabel}>
          수량
        </label>
        <input
          type="number"
          name="bookQuantity"
          id="bookQuantity"
          placeholder="수량를 입력해주세요"
          className={`${style.bookQuantityInput} ${
            errors.quantity ? style.errorInput : ""
          }`}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        {errors.quantity && (
          <span className={style.errorMessage}>수량을 입력하세요.</span>
        )}
      </div>

      <div className={style.addRow}>
        <label htmlFor="bookDescription" className={style.bookDescriptionLabel}>
          설명
        </label>
        <textarea
          id="description"
          placeholder="설명을 입력해주세요"
          className={`${style.bookDescriptionInput} ${
            errors.description ? style.errorInput : ""
          }`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && (
          <span className={style.errorMessage}>설명을 입력하세요.</span>
        )}
      </div>

      <div className={style.addProductButton}>
        <button onClick={btnAddClick}>등록</button>
      </div>
    </div>
  );
};

export default AddProduct;
