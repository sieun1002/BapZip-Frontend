import styled from "styled-components";
import { Link } from "react-router-dom";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BodyDiv = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  /* background-color: #ebebebea; */
  width: 100vw;
  height: auto;
  ${flexCenter()}
`;

export const WrapperDiv = styled.div`
  width: 480px;
  height: 100%;
  /* height: auto; */
  background-color: #ffffff;
  ${flexCenter()}
  justify-content: ${(props) => props.justifyContent || "center"};
  flex-direction: column;
  position: ${(props) => props.position};
  /* border-left: solid 1px black;
  border-right: solid 1px black; */
`;

export const Div = styled.div`
  width: 480px;
  height: ${(props) => props.height || "100vh"};
  ${flexCenter()}
  flex-direction: column;
  justify-content: flex-start;
`;

export const LogoDiv = styled.div`
  /* background-color: pink; */
  margin: 80px 0 30px 0;
  width: 480px;
  height: 73px;
  ${flexCenter()}
`;

export const LogoImage = styled.img`
  width: 81px;
  height: 73px;
`;

export const FontDiv = styled.div`
  /* background-color: #cdc0ff; */
  width: 400px;
  height: 73px;
  ${flexCenter()}
  flex-direction: column;
  margin: 0 0 50px 0;
`;

export const Font1P = styled.p`
  margin: 0;
  color: black;
  font-size: 24px;
  font-weight: 700;
`;

export const Font2P = styled.p`
  margin: 10px 0 0 0;
  color: #ffba35;
  font-size: 16px;
  font-weight: 500;
`;

export const MainBoxDiv = styled.div`
  /* background-color: gray; */
  width: 445px;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Font3P = styled.p`
  margin: 0;
  color: #191919;
  font-size: 18px;
  font-weight: 600;
  line-height: 24.52px;
  white-space: pre-wrap;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  /* background-color: #ffd9004d; */
  width: 201px;
  height: 284px;
  border-radius: 20px;
  border: solid 1.5px #dbdbdb;

  display: flex;
  align-items: center;
  flex-direction: column;

  text-decoration: none;

  &:hover {
    background-color: #fff8ec;
    border-color: #ffba35;
    ${Font3P} {
      color: #ffba35;
    }
  }
`;

export const PersonImage = styled.img`
  width: 110.53px;
  height: 110.53px;
  margin: 50px 0 35px 0;
`;
