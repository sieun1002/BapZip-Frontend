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
  /* background-color: beige; */
`;

export const MainP = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #191919;
  margin-top: ${(props) => props.marginTop || "40px"};
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

export const NotMenuDiv = styled.div`
  width: 420px;
  height: 82px;
  background-color: #f6f6f6;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 600;
  color: #767676;

  ${flexCenter()}
`;

export const MenuListDiv = styled.div`
  width: 420px;
  height: auto;
  /* background-color: beige; */
`;

export const SignatureAndFullDiv = styled.div`
  width: 420px;
  height: auto;
  /* background-color: #0000ff18; */
`;

export const MenuList = styled.div`
  width: 420px;
  height: 129px;
  border-radius: 10px;
  background-color: #f6f6f6;
  margin: 15px 0;
  display: flex;
`;

export const MenuListPDiv = styled.div`
  width: 297px;
  height: 129px;

  padding: 15px 15px;
  box-sizing: border-box;
`;

export const MenuListP1 = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #191919;
  padding: 0;
  margin: 0;
  /* background-color: aqua; */
`;

export const MenuListP2 = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #767676;
  line-height: 19.07px;
  margin: 7px 0 7px 0;
  /* background-color: azure; */
`;

export const MenuListP3 = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #e32525;
  margin: 0;
`;

export const MenuListImg = styled.img`
  width: 129px;
  height: 129px;
`;
