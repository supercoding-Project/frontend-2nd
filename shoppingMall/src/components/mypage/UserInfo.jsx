import React from "react";
import style from "./UserInfo.module.css";

const UserInfo = ({ user }) => {
  return (
    <div className={style.userInfo}>
      <h3 className={style.userInfo__title}>기본정보</h3>
      <div className={style.userInfo__container}>
        <div className={style.userInfo__profile}>
          <img
            src="/basic-user-img.png"
            alt="프로필사진"
            className={style.userInfo__profileImage}
          />
        </div>
        <div className={style.userInfo__info}>
          <div className={style.userInfo__row}>
            <div className={style.userInfo__label}>이름</div>
            <div className={style.userInfo__value}>{user.name}</div>
          </div>
          <div className={style.userInfo__row}>
            <div className={style.userInfo__label}>이메일</div>
            <div className={style.userInfo__value}>{user.email}</div>
          </div>
          <div className={style.userInfo__row}>
            <div className={style.userInfo__label}>주소</div>
            <div className={style.userInfo__address}>
              <div className={style.userInfo__zipcode}>
                {user.address.zipCode}
              </div>
              <div className={style.userInfo__addressDetail}>
                <div className={style.userInfo__addressMain}>
                  {user.address.address}
                </div>
                <div className={style.userInfo__addressSub}>
                  {user.address.detail}
                </div>
              </div>
            </div>
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
