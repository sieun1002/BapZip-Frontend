import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import Hot1 from "../../images/BottomNav1/hot1.svg";
import Hot2 from "../../images/BottomNav1/hot2.svg";
import Hot3 from "../../images/BottomNav1/hot3.svg";

const Recommend = () => {
  const [clicked, setclick] = useState([true, false, false, false, false]);
  let index = 0;
  function clickBtn(x) {
    const bools = [false, false, false, false, false];
    index = x;
    bools[index] = true;
    setclick(bools);
  }

  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div>
      <p className="title-timeline2">추천식당</p>
      <div className="menuBtnSection-timeline2">
        <button
          onClick={() => clickBtn(0)}
          className={clicked[0] ? "btnActive-timeline" : "btn-timeline"}
        >
          전체
        </button>
        <button
          onClick={() => clickBtn(1)}
          className={clicked[1] ? "btnActive-timeline" : "btn-timeline"}
        >
          한식
        </button>
        <button
          onClick={() => clickBtn(2)}
          className={clicked[2] ? "btnActive-timeline" : "btn-timeline"}
        >
          중식
        </button>
        <button
          onClick={() => clickBtn(3)}
          className={clicked[3] ? "btnActive-timeline" : "btn-timeline"}
        >
          일식
        </button>
        <button
          onClick={() => clickBtn(4)}
          className={clicked[4] ? "btnActive-timeline" : "btn-timeline"}
        >
          카페
        </button>
      </div>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <img
            className="swiper-slide"
            src={Hot1}
            alt="Hot2"
            style={{ width: "440px", height: "200px" }}
          />
          <img
            className="swiper-slide"
            src={Hot2}
            alt="Hot2"
            style={{ width: "440px", height: "200px" }}
          />
          <img
            className="swiper-slide"
            src={Hot3}
            alt="Hot2"
            style={{ width: "440px", height: "200px" }}
          />
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Recommend;
