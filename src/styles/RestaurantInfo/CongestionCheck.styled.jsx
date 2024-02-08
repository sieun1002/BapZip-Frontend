import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CongestionCheckWrapper = styled.div`
  width: 480px;
  height: 2px;
  background-color: #0000ff2e;
`;

export const CongestionCheckDiv = styled.div`
  width: 480px;
  height: ${(props) => props.height || "187px"};
  border-radius: 20px 20px 0 0;

  position: fixed;
  bottom: 0;

  box-shadow: 0 0 4px 0 #00000040;

  background-color: #ffffff;
`;

export const CongestionMainPDiv = styled.div`
  width: 440px;
  height: 25px;
  /* background-color: #0000ff38; */

  ${flexCenter()}
  justify-content: space-between;

  margin: 20px 0 25px 20px;
`;

export const CongestionMainPDiv2 = styled.div`
  width: auto;
  height: 25px;
  display: flex;
`;

export const CongestionMainP1 = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.color || "#191919"};
  margin: 0;
  margin-right: 6px;
`;

export const CongestionP2 = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #191919;
  margin: 0 0 13px 20px;
`;

export const CongestionButtonDiv = styled.div`
  width: auto;
  height: 31px;
  /* background-color: #7fffd46f; */
  margin: 0 0 10px 20px;
`;

export const CongestionButton = styled.button`
  width: 76px;
  height: 31px;
  border: solid 1px #dbdbdb;
  border-radius: 40px;
  background-color: ${(props) => props.backgroundColor || "#ffffff"};
  color: ${(props) => props.color || "#767676"};

  font-size: 14px;
  font-weight: 500;

  margin-right: 15px;

  cursor: pointer;
  &:hover {
    background-color: #ffba35;
    color: #ffffff;
  }
`;

export const XImg = styled.img`
  width: 16px;
  height: 16px;

  cursor: pointer;
`;
