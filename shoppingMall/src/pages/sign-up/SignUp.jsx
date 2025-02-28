import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles["container"]}>
      <form className={styles["sign-up-form"]} onSubmit={handleSignUp}>
        <h2>회원가입</h2>
        <div className={styles["input-box"]}>
          <label>이름</label>
          <input type="text" placeholder="이름을 입력해주세요." name="username" className={styles["active"]} />
        </div>
        <div className={styles["input-box"]}>
          <label>이메일</label>
          <input type="email" placeholder="이메일을 입력해주세요." name="email" className={styles["active"]} />
        </div>
        <div className={styles["input-box"]}>
          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호를 입력해주세요." name="password" className={styles["active"]} />
        </div>
        <div className={styles["input-box"]}>
          <label>비밀번호 확인</label>
          <input
            type="password"
            placeholder="동일한 비밀번호를 입력해주세요."
            name="confirmPassword"
            className={styles["active"]}
          />
        </div>
        <div className={styles["input-box"]}>
          <label>휴대폰 번호</label>
          <input type="text" placeholder="휴대폰 번호를 입력해주세요." name="phone" className={styles["active"]} />
        </div>
        <div className={styles["input-box"]}>
          <label>주소</label>
          <input type="text" placeholder="주소를 입력해주세요." name="address" className={styles["active"]} />
        </div>
        <div className={styles["input-box"]}>
          <label>성별</label>
          <select name="gender" className={styles["active"]}>
            <option hidden>성별을 선택해주세요.</option>
            <option value={"남"}>남</option>
            <option value={"여"}>여</option>
          </select>
        </div>
        <div className={styles["input-box"]}>
          <label>프로필 사진</label>
          <input type="file" className={styles["input-file"]} name="image" />
        </div>
        <div className={styles["button-box"]}>
          <Link to={"/"}>
            <button className={styles["cancel-btn"]} type="button">
              취소
            </button>
          </Link>
          <button className={styles["confirm-btn"]} type="submit">
            확인
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
