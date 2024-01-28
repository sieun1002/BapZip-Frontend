import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoDiv = styled.div`
  width: 420px;
  height: 135px;

  margin: 100px 0 60px 0;
`;

export const LogoImage = styled.img`
  width: 144px;
  height: 133px;
`;

export const MainPDiv = styled.div`
  width: 420px;
  height: 170px;
  margin-bottom: 20px;
  /* background-color: aqua; */
`;

export const MainP1 = styled.p`
  font-size: 30px;
  font-weight: 700;
  /* background-color: bisque; */
  margin: 0;
`;

export const MainP2 = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #767676;
  margin: 0;
  margin-top: ${(props) => props.marginTop};
`;

export const AgreementDiv = styled.div`
  width: 420px;
  height: 40px;
  /* background-color: bisque; */
  margin: 3px;
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: #191919;

  position: relative;
`;

export const LineDiv = styled.div`
  width: 430px;
  height: 0px;
  margin: 15px 0;
  border: solid 1px #c0c0c0;
`;

export const DetailImage = styled.img`
  width: 15px;
  height: 20px;
  position: absolute;

  right: 10px;
`;
