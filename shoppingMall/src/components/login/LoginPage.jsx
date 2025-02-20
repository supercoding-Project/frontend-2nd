import { React, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { RiGoogleFill, RiKakaoTalkFill } from "react-icons/ri";
import ScrollTopButton from "../common/ScrollTopButton";
import EyeOpen from "../../assets/Icons/eye.svg";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(false);
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);
  const [enteredPasswordIsTouched, setEnteredPasswordIsTouched] =
    useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEnteredEmailIsTouched(true);
    setEnteredPasswordIsTouched(true);
    console.log("enteredEmail", enteredEmail);
    console.log("enteredPassword", enteredPassword);

    const emailIsValid = enteredEmail.includes("@");
    const pwIsValid = enteredPassword.trim().length > 0;

    setEnteredEmailIsValid(emailIsValid);
    setEnteredPasswordIsValid(pwIsValid);

    //enteredEmail email형식이 아니면 제출 안되게

    if (!emailIsValid || !pwIsValid) {
      console.log("submit fail!");

      console.log(enteredEmailIsValid);
      console.log(enteredPasswordIsValid);
      return;
    }
    console.log("submit success");
    setEnteredEmailIsValid(true);
    setEnteredPasswordIsValid(true);
    console.log(enteredEmailIsValid);
    console.log(enteredPasswordIsValid);
    setEnteredEmail("");
    setEnteredPassword("");
  };

  const handleEmailInput = (e) => {
    const email = e.target.value;
    setEnteredEmail(email);
    setEnteredEmailIsValid(email.includes("@"));
  };

  const handlePasswordInput = (e) => {
    const password = e.target.value;
    setEnteredPassword(password);
    setEnteredPasswordIsValid(password.trim().length > 0);
  };

  //에러 메세지 보여주는 경우, true -> show msg
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enteredPasswordIsTouched;

  const inputClasses = emailInputIsInvalid ? styles.inputError : styles.input;
  const pwInputClasses = passwordInputIsInvalid
    ? styles.inputError
    : styles.input;

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>로그인</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="이메일을 입력하세요"
            className={inputClasses}
            onChange={handleEmailInput}
            value={enteredEmail}
            ref={emailInputRef}
          />
          {emailInputIsInvalid && (
            <p className={styles.error}>🚨이메일 형식으로 입력해주세요.</p>
          )}

          <div className={styles.passwordWrapper}>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className={pwInputClasses}
              value={enteredPassword}
              ref={passwordInputRef}
              onChange={handlePasswordInput}
            />
            <img src={EyeOpen} className={styles.eye} />
            {passwordInputIsInvalid && (
              <p className={styles.error}>🚨패스워드를 입력해주세요.</p>
            )}
            <button type="submit" className={styles.loginButton}>
              로그인
            </button>
          </div>
        </form>
        <div className={styles.socialLogin}>
          <button className={styles.google}>
            <RiGoogleFill size={24} /> 구글 로그인
          </button>
          <button className={styles.kakao}>
            <RiKakaoTalkFill size={24} /> 카카오 로그인
          </button>
        </div>
        <div className={styles.links}>
          <Link to="/signup">회원가입</Link>
          <Link to="/find-password">아이디 찾기</Link>
          <Link to="/find-password">비밀번호 찾기</Link>
        </div>
      </div>
      <ScrollTopButton />
    </div>
  );
};

export default LoginPage;
