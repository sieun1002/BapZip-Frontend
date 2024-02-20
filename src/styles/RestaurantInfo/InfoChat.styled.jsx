import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainTitleDiv = styled.div`
  width: 420px;
  height: 30px;
  /* background-color: beige; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 30px 0 20px 0;
`;

export const MainP1 = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #191919;
  margin: 0;
`;

export const MainP2 = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #767676;
`;

export const ChatContainer = styled.div`
  width: 420px;
  height: auto;
  background-color: #f6f6f6;
  border-radius: 10px;

  ${flexCenter()}
  flex-direction: column;

  margin-bottom: 20px;
`;

export const TodayChatDiv = styled.div`
  width: 390px;
  height: auto;
  margin: 20px 0 20px 0;
  /* background-color: beige; */
`;

export const TodayDiv = styled.div`
  width: 390px;
  height: 19px;
  /* background-color: #00ffff31; */
  display: flex;
  align-items: center;
`;

export const TodayLine = styled.div`
  width: 144px;
  height: 0px;
  border: solid 1px #dbdbdb;
`;

export const TodayP = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #767676;

  margin: 0 10px 0 10px;
`;

export const NotChatDiv = styled.div`
  width: 390px;
  height: 100px;
  font-size: 16px;
  font-weight: 600;
  color: #767676;

  ${flexCenter()}
  text-align: center;
`;

export const ChatInputDiv = styled.div`
  width: 380px;
  height: 47px;
  margin-bottom: 20px;

  /* background-color: beige; */
  position: relative;
`;

export const ChatInput = styled.input`
  width: 380px;
  height: 47px;
  border-radius: 40px;
  padding: 0 15px 0 15px;
  font-size: 16px;
  font-weight: 500;
  color: #767676;

  box-sizing: border-box;
  border: solid 0px;
`;

export const SubmitButton = styled.button`
  width: 33px;
  height: 33px;
  border: 0px;
  background-color: #ffffff;

  position: absolute;
  right: 20px;
  top: 6px;
`;

export const SubmitImg = styled.img`
  width: 33px;
  height: 33px;

  cursor: pointer;
`;

export const ActiveChatDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  /* background-color: beige; */

  margin: 25px 0;
`;

export const ActiveChatDivMe = styled.div`
  width: auto;
  height: auto;
  display: flex;
  /* background-color: beige; */

  margin: 25px 0;

  //나
  flex-direction: row-reverse;
`;
export const ProfileImg = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;

  margin-right: 10px;
`;

export const ProfileImgMe = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  margin-left: 10px;
`;

export const ActiveChatPDiv = styled.div`
  width: auto;
  height: auto;

  /* background-color: aquamarine; */
`;

export const ActiveChatPDivMe = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  /* background-color: aquamarine; */
`;

export const ProfileNickName = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #191919;

  margin: 3px 0 5px 0;
`;

export const ChatAndTime = styled.div`
  width: auto;
  height: auto;
  /* background-color: #a52a2a48; */

  display: flex;
  align-items: flex-end;

  margin: 0;
`;

export const ChatAndTimeMe = styled.div`
  width: auto;
  height: auto;
  /* background-color: #a52a2a48; */

  display: flex;
  align-items: flex-end;
  flex-direction: row-reverse;

  margin: 0;
`;

export const ChatContent = styled.div`
  max-width: 250px;
  font-size: 14px;
  font-weight: 500;
  color: #191919;

  /* background-color: blueviolet; */

  margin: 0;
  margin-right: 10px;
`;

export const ChatContentMe = styled.div`
  max-width: 250px;

  font-size: 14px;
  font-weight: 500;
  color: #191919;

  /* background-color: blueviolet; */

  margin: 0;
`;

export const Time = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: #767676;

  margin: 0;
`;

export const TimeMe = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: #767676;

  margin: 0;
  margin-right: 10px;
`;
