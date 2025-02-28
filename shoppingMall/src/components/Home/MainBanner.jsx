import React from "react";
import styles from "./MainBanner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ✅ 변경된 import 방식
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const MainBanner = () => {
  return (
    <>
      <Swiper
        className={`${styles.banner} ${styles.bannerStyle}`}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }} // ✅ 자동 슬라이드 추가
        modules={[Navigation, Pagination, Autoplay]} // ✅ modules 속성 추가 필수!
      >
        <SwiperSlide>
          <img
            alt="배너1"
            className={styles.bannerImage}
            src="https://cdn.bookoa.co.kr/banner/bookzzin-1700613235211-582"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="배너2"
            className={styles.bannerImage}
            src="https://contents.kyobobook.co.kr/display/i_890_380_1c1504f800da470a8ae1380dc8ed7047.jpg"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="배너3"
            className={styles.bannerImage}
            src="https://contents.kyobobook.co.kr/display/i_890_380_81ecadb74c404e8792b51f04a52456b5.jpg"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="배너4"
            className={styles.bannerImage}
            src="https://contents.kyobobook.co.kr/display/i_890_380_88a1fd179f50434280d5c45209a9cdaa.jpg"
          ></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBanner;
