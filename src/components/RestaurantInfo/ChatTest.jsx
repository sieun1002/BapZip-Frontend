import React from "react";
import axios from "axios";
import "./ChatTest.css";

export default function ChatTest() {
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
    const message = JSON.parse(event.data);
    // 받은 메시지를 화면에 표시
    displayMessage(message);
  };

  socket.onclose = (event) => {
    console.log("WebSocket 연결이 닫혔습니다.");
  };

  function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;
    messageInput.value = "";

    const chatMessageRequest = {
      storeId: storeId,
      userId: userId,
      message: message,
      chatMessageType: "CHAT",
    };

    socket.send(JSON.stringify(chatMessageRequest));
  }

  return (
    <div className="chat-container">
      <div className="chat-box">
        <ul id="chat-messages" className="chat-messages"></ul>
      </div>
      <div className="message-input-box">
        <input
          type="text"
          id="message-input"
          className="message-input"
          placeholder="메시지를 입력하세요"
        />
        <button className="send-button" onClick={sendMessage}>
          전송
        </button>
      </div>
    </div>
  );
}
