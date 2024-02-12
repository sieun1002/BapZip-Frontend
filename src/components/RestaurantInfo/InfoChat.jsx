import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
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
  const [lastUpdate, setLastUpdate] = useState("0분전");

  const socketRef = useRef(null); // useRef를 사용하여 WebSocket 인스턴스 참조 저장

  const userId = localStorage.getItem("userId");
  const { storeId } = useParams();

  const today = new Date().toLocaleDateString("fr-CA");

  useEffect(() => {
    // WebSocket 연결
    socketRef.current = new WebSocket(
      "ws://Babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/chat"
    );

    const socket = socketRef.current;

    socket.onopen = () => {
      console.log("WebSocket 연결이 열렸습니다.");
      // 초기 데이터 전송
      const initialData = {
        storeId,
        userId,
        // token,
        message: "INIT",
        chatMessageType: "ENTER",
      };
      socket.send(JSON.stringify(initialData));
      fetchPreviousMessages();
    };

    socket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return () => {
      socket.close(); // 컴포넌트 언마운트 시 소켓 닫기
    };
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessageTime = new Date(messages[messages.length - 1].timestamp);
      const now = new Date();
      const diffMinutes = Math.floor((now - lastMessageTime) / 60000); // 차이를 분으로 계산
      setLastUpdate(`${diffMinutes}분전`);
    }
  }, [messages]); // messages 배열이 변경될 때마다 실행

  function fetchPreviousMessages() {
    const baseUrl =
      "http://Babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com";
    axios
      .get(`${baseUrl}/chat/${storeId}/messages`)
      .then((response) => {
        const data = response.data;
        if (data.isSuccess && data.result) {
          // 클라이언트의 현재 날짜를 YYYY-MM-DD 형식으로 가져옵니다.
          const clientToday = new Date().toLocaleDateString("fr-CA");

          const todayMessages = data.result.filter((message) => {
            // 서버에서 받은 타임스탬프를 로컬 타임존의 날짜로 변환합니다.
            const messageDate = new Date(message.timestamp).toLocaleDateString(
              "fr-CA"
            );
            return messageDate === clientToday;
          });
          setMessages(todayMessages);
        }
      })
      .catch((error) =>
        console.error("이전 메시지를 불러오는 중 오류 발생", error)
      );
  }

  const sendMessage = (event) => {
    event.preventDefault();
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      const chatMessageRequest = {
        storeId,
        userId,
        // token,
        message,
        chatMessageType: "CHAT",
      };
      socketRef.current.send(JSON.stringify(chatMessageRequest));
      setMessage(""); // 메시지 상태 초기화
    } else {
      console.error("WebSocket이 연결되지 않았습니다.");
    }
  };
  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <MainTitleDiv>
            <MainP1>실시간 채팅</MainP1>
            <MainP2>최근 업데이트: {lastUpdate}</MainP2>
          </MainTitleDiv>
          <ChatContainer>
            <TodayChatDiv>
              <TodayDiv>
                <TodayLine></TodayLine>
                <TodayP>{today}</TodayP>
                <TodayLine></TodayLine>
              </TodayDiv>
              {messages.length === 0 ? (
                <NotChatDiv>
                  아직 오늘의 채팅이 시작되지 않았어요. <br /> 채팅을
                  시작해보세요!
                </NotChatDiv>
              ) : (
                messages.map((msg, index) =>
                  msg.userId === userId ? (
                    // msg.token === token ? (
                    <ActiveChatDivMe key={index}>
                      {msg.imageUrl ? (
                        <ProfileImgMe src={msg.imageUrl} />
                      ) : (
                        <ProfileImgMe src={profile} />
                      )}

                      <ActiveChatPDivMe>
                        <ProfileNickName>나</ProfileNickName>
                        <ChatAndTimeMe>
                          <ChatContentMe>{msg.message}</ChatContentMe>
                          <TimeMe>
                            {new Date(msg.timestamp).toLocaleTimeString()}
                          </TimeMe>
                        </ChatAndTimeMe>
                      </ActiveChatPDivMe>
                    </ActiveChatDivMe>
                  ) : (
                    <ActiveChatDiv key={index}>
                      {msg.imageUrl ? (
                        <ProfileImg src={msg.imageUrl} />
                      ) : (
                        <ProfileImg src={profile} />
                      )}

                      <ActiveChatPDiv>
                        <ProfileNickName>{msg.nickname}</ProfileNickName>
                        <ChatAndTime>
                          <ChatContent>{msg.message}</ChatContent>
                          <Time>
                            {new Date(msg.timestamp).toLocaleTimeString()}
                          </Time>
                        </ChatAndTime>
                      </ActiveChatPDiv>
                    </ActiveChatDiv>
                  )
                )
              )}
            </TodayChatDiv>
            <ChatInputDiv>
              <ChatInput
                placeholder="채팅을 입력하세요"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <SubmitButton onClick={sendMessage}>
                <SubmitImg src={submitiamge} alt="submit image" />
              </SubmitButton>
            </ChatInputDiv>
          </ChatContainer>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}
