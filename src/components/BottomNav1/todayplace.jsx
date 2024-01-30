import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import Hot1 from "../../images/BottomNav1/hot1.svg";
import Hot2 from "../../images/BottomNav1/hot2.svg";
import Hot3 from "../../images/BottomNav1/hot3.svg";

const MySwiperComponent = () => {
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
   
    <div className="swiper mySwiper">
      <div className="swiper-wrapper"> 
      <img className="swiper-slide" src={Hot1} alt="Hot2" style={{ width: '440px', height: '200px' }} />
        <img className="swiper-slide" src={Hot2} alt="Hot2" style={{ width: '440px', height: '200px' }} />
        <img className="swiper-slide" src={Hot3} alt="Hot2" style={{ width: '440px', height: '200px' }} /> 
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
    </div>
    
  );
};

export default MySwiperComponent;
