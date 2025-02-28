import React from "react";
import style from "./UserInfo.module.css";

const UserInfo = ({ user }) => {
  if (!user) {
    return <div>유저 정보를 불러올 수 없습니다.</div>;
  }

  return (
    <div className={style.userInfo}>
      <h3 className={style.userInfo__title}>기본정보</h3>
      <div className={style.userInfo__container}>
        <div className={style.userInfo__profile}>
          <img
            src={user.userImage?.url || "/basic-user-img.png"}
            alt="프로필사진"
            className={style.userInfo__profileImage}
          />
        </div>
        <div className={style.userInfo__info}>
          <div className={style.userInfo__row}>
            <div className={style.userInfo__label}>이름</div>
            <div className={style.userInfo__value}>{user.username}</div>
          </div>
          <div className={style.userInfo__row}>
            <div className={style.userInfo__label}>이메일</div>
            <div className={style.userInfo__value}>{user.email}</div>
          </div>
          <div className={style.userInfo__row}>
            <div className={style.userInfo__label}>주소</div>
            <div className={style.userInfo__value}>{user.address}</div>
          </div>
          <div className={style.userInfo__row}>
            <div className={style.userInfo__label}>전화번호</div>
            <div className={style.userInfo__value}>{user.phone}</div>
          </div>
          <div className={style.userInfo__row}>
            <div className={style.userInfo__label}>성별</div>
            <div className={style.userInfo__value}>{user.gender}</div>
          </div>
        </div>
      </div>
      <div className={style.userInfo__actions}>
        <button className={style.userInfo__editButton}>정보수정</button>
      </div>
    </div>
  );
};

export default UserInfo;
