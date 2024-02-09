import React from "react";

export default function ChatTest() {
  // 사용자 ID와 가게 ID를 랜덤으로 생성하는 코드
  const userId = "test1"; // 1에서 8 사이의 랜덤 숫자 생성
  const storeId = 2; // 1에서 3 사이의 랜덤 숫자 생성

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
      chatMessageType: "ENTER", // 메시지 유형을 ENTER로 설정
    };

    // 초기 데이터를 서버에 전송
    socket.send(JSON.stringify(initialData));

    // 이전 메시지를 가져오는 함수 호출
    fetchPreviousMessages();
  };

  // 이전 메시지를 불러오는 함수
  function fetchPreviousMessages() {
    const baseUrl =
      "http://Babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com";

    // 서버로부터 이전 메시지를 가져옴
    fetch(`${baseUrl}/chat/${storeId}/messages`)
      .then((response) => response.json())
      .then((data) => {
        if (data.isSuccess && data.result) {
          // 가져온 메시지를 화면에 표시
          data.result.forEach((message) => {
            displayMessage(message);
          });
        }
      })
      .catch((error) =>
        console.error("이전 메시지를 불러오는 중 오류 발생", error)
      );
  }

  // 메시지를 화면에 표시하는 함수
  function displayMessage(message) {
    const chatMessages = document.getElementById("chat-messages");
    const li = document.createElement("li");
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
    const message = JSON.parse(event.data);
    // 받은 메시지를 화면에 표시
    displayMessage(message);
  };

  // 웹소켓 연결이 닫힐 때 실행되는 함수
  socket.onclose = (event) => {
    console.log("WebSocket 연결이 닫혔습니다.");
  };

  // 메시지를 전송하는 함수
  function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;
    messageInput.value = "";

    // 전송할 메시지 데이터
    const chatMessageRequest = {
      storeId: storeId,
      userId: userId,
      message: message,
      chatMessageType: "CHAT", // 메시지 유형을 CHAT으로 설정
    };

    // 데이터를 서버에 전송
    socket.send(JSON.stringify(chatMessageRequest));
  }
  return (
    <div>
      <div id="chat-box">
        <ul id="chat-messages"></ul>
      </div>
      <input type="text" id="message-input" placeholder="메시지를 입력하세요" />
      <button onClick={sendMessage}>전송</button>
    </div>
  );
}
