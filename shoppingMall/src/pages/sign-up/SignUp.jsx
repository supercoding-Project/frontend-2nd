import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles["container"]}>
      <form className={styles["sign-up-form"]}>
        <h2>회원가입</h2>
        <div className={styles["input-box"]}>
          <label>이름</label>
          <input type="text" placeholder="이름을 입력해주세요." />
        </div>
        <div className={styles["input-box"]}>
          <label>이메일</label>
          <input type="email" placeholder="이메일을 입력해주세요." />
        </div>
        <div className={styles["input-box"]}>
          <label>비밀번호</label>
          <input type="text" placeholder="비밀번호를 입력해주세요." />
        </div>
        <div className={styles["input-box"]}>
          <label>비밀번호 확인</label>
          <input type="text" placeholder="동일한 비밀번호를 입력해주세요." />
        </div>
        <div className={styles["input-box"]}>
          <label>휴대폰 번호</label>
          <input type="text" placeholder="휴대폰 번호를 입력해주세요." />
        </div>
        <div className={styles["input-box"]}>
          <label>주소</label>
          <input type="text" placeholder="주소를 입력해주세요." />
        </div>
        <div className={styles["input-box"]}>
          <label>성별</label>
          <select>
            <option>남</option>
            <option>여</option>
          </select>
        </div>
        <div className={styles["input-box"]}>
          <label>프로필 사진</label>
          <input type="file" className={styles["input-file"]} />
        </div>
        <div className={styles["button-box"]}>
          <Link to={"/"}>
            <button className={styles["cancel-btn"]} type="button">
              취소
            </button>
          </Link>
          <button className={styles["confirm-btn"]} type="submit" onClick={handleSignUp}>
            확인
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
