import React, { useState } from "react";
import axios from "axios";
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
  ActiveChatDiv,
  ProfileImg,
  ProfileImgMe,
  ActiveChatPDiv,
  ProfileNickName,
  ChatAndTime,
  ChatContent,
  Time,
  ActiveChatDivMe,
  ActiveChatPDivMe,
  ChatAndTimeMe,
  ChatContentMe,
  TimeMe,
} from "../../styles/RestaurantInfo/InfoChat.styled";

import submitiamge from "../../images/RestaurantInfo/submitImg.svg";
import profile from "../../images/RestaurantInfo/profile.svg";

export default function InfoChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  // const userId = Math.floor(Math.random() * 8) + 1;
  // const storeId = Math.floor(Math.random() * 3) + 1;

  const userId = 1;
  const storeId = 1;

  // 웹소켓 연결을 설정하는 코드
  const socket = new WebSocket(
    "ws://Babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/chat"
  );

  // 웹소켓 연결이 열릴 때 실행되는 함수
  socket.onopen = (event) => {
    console.log("WebSocket 연결이 열렸습니다.");

    // 채팅방에 입장할 때 사용되는 초기 데이터
    const initialData = {
      storeId: storeId,
      userId: userId,
      message: "INIT",
      chatMessageType: "ENTER",
    };

    // 초기 데이터를 서버에 전송
    socket.send(JSON.stringify(initialData));
    fetchPreviousMessages();
  };

  // 이전 메시지를 가져오는 함수
  function fetchPreviousMessages() {
    const baseUrl =
      "http://Babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com";

    axios
      .get(`${baseUrl}/chat/${storeId}/messages`)
      .then((response) => {
        const data = response.data;
        if (data.isSuccess && data.result) {
          //현재 날짜를 YYYY-MM-DD 형식의 문자열로 변환
          const today = new Date().toISOString().split("T")[0];

          data.result.forEach((message) => {
            //메시지의 timestamp를 YYYY-MM-DD 형식으로 변환
            const messageDate = message.timestamp.split("T")[0];

            //메시지의 날짜가 오늘 날짜와 같으면 화면에 표시
            if (messageDate === today) {
              displayMessage(message);
            }
          });
        }

        console.log(response.data.result);
      })
      .catch((error) =>
        console.error("이전 메시지를 불러오는 중 오류 발생", error)
      );
  }

  // 메시지를 화면에 표시하는 함수
  function displayMessage(message) {
    const chatMessages = document.getElementById("chat-messages");
    const li = document.createElement("li");

    // 내 메시지인지 다른 사람의 메시지인지 확인하여 클래스 적용
    if (message.userId === userId) {
      li.className = "message-mine"; // 내 메시지
    } else {
      li.className = "message-others"; // 다른 사람의 메시지
    }

    li.textContent = `${message.nickname}: ${
      message.message
    } (${formatTimestamp(message.timestamp)})`;
    chatMessages.appendChild(li);
  }

  // 타임스탬프를 현지 시간 형식으로 변환하는 함수
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  // 서버로부터 메시지를 받았을 때 실행되는 함수
  socket.onmessage = (event) => {
    const newMessage = JSON.parse(event.data);
    // 받은 메시지를 messages 상태에 추가
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  socket.onclose = (event) => {
    console.log("WebSocket 연결이 닫혔습니다.");
  };

  function sendMessage(event) {
    event.preventDefault(); // 폼 전송 기본 이벤트 방지
    if (!message.trim()) return; // 메시지가 비어있으면 전송하지 않음

    const chatMessageRequest = {
      // storeId, userId 등 기타 필요한 데이터 설정
      storeId: storeId,
      userId: userId,
      message: message,
      chatMessageType: "CHAT",
    };

    socket.send(JSON.stringify(chatMessageRequest));
    setMessage(""); // 메시지 상태 초기화
  }
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
              {/* <NotChatDiv>
                아직 오늘의 채팅이 시작되지 않았어요. <br /> 채팅을
                시작해보세요!
              </NotChatDiv> */}

              {/* 다른 사람이 보낸 메시지 */}
              <ActiveChatDiv>
                <ProfileImg src={profile} />
                <ActiveChatPDiv>
                  <ProfileNickName>닉네임</ProfileNickName>
                  <ChatAndTime>
                    <ChatContent>아직 안 열었어요.</ChatContent>
                    <Time>09:10</Time>
                  </ChatAndTime>
                </ActiveChatPDiv>
              </ActiveChatDiv>

              {/* 내가 보낸 메시지 */}
              <ActiveChatDivMe>
                <ProfileImgMe src={profile} />
                <ActiveChatPDivMe>
                  <ProfileNickName>나</ProfileNickName>
                  <ChatAndTimeMe>
                    <ChatContentMe>지금 웨이팅 어떤가요?</ChatContentMe>
                    <TimeMe>09:10</TimeMe>
                  </ChatAndTimeMe>
                </ActiveChatPDivMe>
              </ActiveChatDivMe>
            </TodayChatDiv>

            <ChatInputDiv>
              <ChatInput
                placeholder="채팅을 입력하세요"
                value={message}
                onChange={handleInputChange}
              />
              <SubmitButton type="submit" onClick={sendMessage}>
                <SubmitImg src={submitiamge} alt="submit image" />
              </SubmitButton>
            </ChatInputDiv>
          </ChatContainer>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}
