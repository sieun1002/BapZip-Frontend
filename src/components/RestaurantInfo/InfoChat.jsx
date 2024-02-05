import React from "react";
import {
  BodyDiv,
  WrapperDiv,
  Div,
} from "../../styles/RestaurantInfo/RestaurantInfo.styled";

import {
  MainTitleDiv,
  MainP1,
  MainP2,
  ChatContainer,
  TodayChatDiv,
  TodayDiv,
  TodayLine,
  TodayP,
  NotChatDiv,
  ChatInput,
  SubmitButton,
  SubmitImg,
  ChatInputDiv,
} from "../../styles/RestaurantInfo/InfoChat.styled";

import submitiamge from "../../images/RestaurantInfo/submitImg.svg";

export default function InfoChat() {
  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <MainTitleDiv>
            <MainP1>실시간 채팅</MainP1>
            <MainP2>최근 업데이트: 0분전</MainP2>
          </MainTitleDiv>
          <ChatContainer>
            <TodayChatDiv>
              <TodayDiv>
                <TodayLine></TodayLine>
                <TodayP>2024.01.02</TodayP>
                <TodayLine></TodayLine>
              </TodayDiv>
              <NotChatDiv>
                아직 오늘의 채팅이 시작되지 않았어요. <br /> 채팅을
                시작해보세요!
              </NotChatDiv>
            </TodayChatDiv>
            <ChatInputDiv>
              <ChatInput placeholder="채팅을 입력하세요" />
              <SubmitButton type="submit">
                <SubmitImg src={submitiamge} alt="submitiamge" />
              </SubmitButton>
            </ChatInputDiv>
          </ChatContainer>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}
