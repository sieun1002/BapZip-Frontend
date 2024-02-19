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

export const PointImg = styled.img`
  width: 200px;
  height: 140px;
  margin-bottom: 20px;
`;

export const PointDiv = styled.div`
  width: 318px;
  height: 291px;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  box-shadow: 0 0 4px 0 #00000040;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 30000;
`;
export const PointP = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #191919;
  margin: 0;
  margin-bottom: 20px;
`;

export const PointButton = styled.button`
  width: 285.64px;
  height: 42px;
  background-color: #ffba35;

  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;

  border: 0px;
  border-radius: 10px;
`;

export const BodDiv = styled.div`
  width: 100vw;
  height: 500px;
  ${flexCenter()}

  z-index: 10;
`;

export const WrappeDiv = styled.div`
  width: 480px;
  height: 100%;
  /* height: auto; */
  background-color: #191919b2;
  ${flexCenter()}
  justify-content: ${(props) => props.justifyContent || "center"};
  flex-direction: column;
  position: ${(props) => props.position};
  border-left: solid 1px black;
  border-right: solid 1px black;
  z-index: 4;

  position: fixed;
  top: 50%;
  transform: translate(0, -50%);
`;
