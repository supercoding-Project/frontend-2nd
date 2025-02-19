import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["form-container"]}>
        <div className={styles["content"]}>
          <h2>회원가입</h2>
        </div>
        <form className={styles["sign-up-form"]}>
          <div className={styles["input-container"]}>
            <label>이름</label>
            <input type="text" placeholder="이름을 입력해주세요." />
          </div>
          <div className={styles["input-container"]}>
            <label>아이디</label>
            <input type="text" placeholder="아이디를 입력해주세요." />
            <button type="button" className={styles["duplicate-check-button"]}>
              중복확인
            </button>
          </div>
          <div className={styles["input-container"]}>
            <label>비밀번호</label>
            <input type="text" placeholder="비밀번호를 입력해주세요." />
          </div>
          <div className={styles["input-container"]}>
            <label>비밀번호 확인</label>
            <input type="text" placeholder="동일한 비밀번호를 입력해주세요." />
          </div>
          <div className={styles["input-container"]}>
            <label>주소</label>
            <input type="text" placeholder="기본 주소" />
          </div>
          <div className={styles["input-container"]}>
            <label>상세 주소</label>
            <input type="text" placeholder="상세 주소" />
          </div>
          <div className={styles["button-container"]}>
            <button type="button" className={styles["cancel-button"]}>
              취소
            </button>
            <button type="submit" className={styles["confirm-button"]}>
              확인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
