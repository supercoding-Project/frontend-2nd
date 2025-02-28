import { React, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollTopButton from "../common/ScrollTopButton";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import styles from "./LoginPage.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../API/AuthService";
import SocialLogin from "./SocialLogin";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(false);
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);
  const [enteredPasswordIsTouched, setEnteredPasswordIsTouched] =
    useState(false);
  const [pw, setPw] = useState({
    type: "password",
    value: false,
  });

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") {
      dispatch(authActions.logIn());
      navigate("/", { replace: true });
    }
  }, [dispatch, navigate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setEnteredEmailIsTouched(true);
    setEnteredPasswordIsTouched(true);

    const emailIsValid = enteredEmail.includes("@");
    const pwIsValid = enteredPassword.trim().length > 0;

    //enteredEmail email형식이 아니면 제출 안되게

    if (!emailIsValid || !pwIsValid) {
      console.log("submit fail!");
      return;
    }

    try {
      const response = await logIn(enteredEmail, enteredPassword);
      console.log("login Success", response);
      dispatch(authActions.logIn());
      setEnteredEmail("");
      setEnteredPassword("");
      localStorage.setItem("email", response.email);
      localStorage.setItem("userName", response.username);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/", { replace: false });
    } catch (error) {
      console.error("login fail", error.message);
      alert(error.message || "Please check your account");
    }
    // console.log("submit success");
    // setEnteredEmailIsValid(true);
    // setEnteredPasswordIsValid(true);
    // localStorage.setItem("isAuthenticated", true);
    // localStorage.setItem("email", enteredEmail); // 이메일 저장
    // setEnteredEmail("");
    // setEnteredPassword("");
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

  const handlePwCheck = (e) => {
    setPw(() => {
      if (!pw.value) {
        return { type: "text", value: true };
      }
      return { type: "password", value: false };
    });
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
              type={pw.type}
              placeholder="비밀번호를 입력하세요"
              className={pwInputClasses}
              value={enteredPassword}
              ref={passwordInputRef}
              onChange={handlePasswordInput}
            />
            {!pw.value ? (
              <AiFillEye onClick={handlePwCheck} className={styles.eye} />
            ) : (
              <AiFillEyeInvisible
                onClick={handlePwCheck}
                className={styles.eye}
              />
            )}
            {passwordInputIsInvalid && (
              <p className={styles.error}>🚨패스워드를 입력해주세요.</p>
            )}
            <button type="submit" className={styles.loginButton}>
              로그인
            </button>
          </div>
        </form>
        {/* <div className={styles.socialLogin}>
          <button className={styles.google} onClick={handleGoogleLogin}>
            <RiGoogleFill size={24} /> 구글 로그인
          </button>
          <button className={styles.kakao} onClick={handleKakaoLogin}>
            <RiKakaoTalkFill size={24} /> 카카오 로그인
          </button>
        </div> */}
        <SocialLogin />
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
