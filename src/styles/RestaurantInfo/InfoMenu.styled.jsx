import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuPanDiv = styled.div`
  width: 420px;
  /* height: 210px; */
  height: auto;
  background-color: beige;
`;

export const MenuPanP = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #191919;
  margin-top: 40px;
`;

export const SliderContainer = styled.div`
  max-width: 420px; /* 변경: 너비 100%로 설정 */
  max-height: 115px;
  overflow: hidden;
  /* margin-top: 50px; */

  /* background-color: #0c4e4e; */
`;

export const ImageSlider = styled.div`
  display: flex;
  width: 420px; /* Set your desired maximum width */
  margin: 0 auto; /* Center the slider */
  transition: transform 0.3s ease;
`;

export const SlideImage = styled.img`
  width: 115px;
  /* height: 115px; */
  height: auto;
  margin: 0 5px;
`;
