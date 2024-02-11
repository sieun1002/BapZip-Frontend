import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/user/userSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  BodyDiv,
  WrapperDiv,
  Div,
} from "../../styles/Login/LoginSelection.style";
import {
  HeaderDiv,
  ArrowLeftImage,
  MainDiv,
  Form,
  Input,
  EyesImage,
  AutomaticLoginDiv,
  CircleImage,
  Submit,
  SearchDiv,
  SearchList,
  SearchLink,
  Div2,
  PDiv,
  FailedLoginDiv,
  FailedLoginP,
} from "../../styles/Login/Login2.style";

import arrowLeft from "../../images/Login/arrowLeft.svg";
import emptyCircle from "../../images/Login/emptyCircle.svg";
import checkCircle from "../../images/Login/checkCircle.svg";
import show from "../../images/Login/show.svg";
import secret from "../../images/Login/secret.svg";

export default function Login2() {
  const dispatch = useDispatch();

  const [validLogin, setValidLogin] = useState(null);

  const [Circle, setCircle] = useState(false);
  const [form, setForm] = useState({
    id: "",
    password: "",
  });
  const [vaildPassword, setVaildPassword] = useState(null);
  const [vaildId, setVaildId] = useState(null);
  const [Eyes, setEyes] = useState(false);

  const ClickEmptyCircle = () => {
    setCircle(true);
  };

  const ClickCheckCircle = () => {
    setCircle(false);
  };

  const CircleFunc = Circle ? ClickCheckCircle : ClickEmptyCircle;

  const ClickShow = () => {
    setEyes(true);
  };

  const ClickSecret = () => {
    setEyes(false);
  };

  const EyesFunc = Eyes ? ClickSecret : ClickShow;

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setForm({ ...form, password });

    if (password.trim() === "") {
      setVaildPassword(null); //값이 없는 경우 null로 설정
    }
  };

  const handleIdChange = (e) => {
    const id = e.target.value;
    setForm({ ...form, id });

    if (id.trim() === "") {
      setVaildId(null); //값이 없는 경우 null로 설정
    }
  };

  // 로그인 함수
  const handleLogin = async () => {
    try {
      // API 요청 URL
      const url =
        "http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/users/auth/signin";

      // 요청 본문에 포함될 데이터
      const data = {
        userId: form.id,
        password: form.password,
      };

      // axios.post 메소드를 사용하여 요청을 보냄
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json", // 명시적으로 Content-Type 헤더 설정
        },
      });

      // 로그인 성공 처리
      console.log("Login successful");
      const userId = form.id;
      const token = response.data.result.token;
      dispatch(setCredentials({ userId, token }));
      localStorage.setItem("token", token);

      localStorage.setItem("userId", form.id);
      localStorage.setItem("schoolId", response.data.result.schoolId);

      setValidLogin(true);
    } catch (error) {
      // 로그인 실패 또는 에러 처리
      console.error(
        "Login error",
        error.response ? error.response.data : error
      );
      setValidLogin(false);
      // 에러 상황에 대한 처리 로직을 추가하세요. 예: 사용자에게 에러 메시지 표시
    }
  };

  //폼 제출 핸들러 수정
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 기본 제출 동작 방지
    console.log("handleSubmit called"); // 디버깅 메시지
    handleLogin();
  };

  return (
    <BodyDiv>
      <WrapperDiv justifyContent="flex-start">
        <Div>
          <HeaderDiv>
            <SearchLink to="/">
              <ArrowLeftImage src={arrowLeft} alt="arrowLeft" />
            </SearchLink>
            <PDiv>로그인</PDiv>
          </HeaderDiv>

          <MainDiv>
            <Form onSubmit={handleSubmit}>
              <Input
                type="id"
                id="id"
                value={form.id}
                onChange={handleIdChange}
                placeholder="아이디"
              />
              <Input
                type={Eyes ? "text" : "password"}
                id="password"
                value={form.password}
                onChange={handlePasswordChange}
                placeholder="비밀번호 (숫자, 영문 8~12자리)"
              />
              <EyesImage
                onClick={EyesFunc}
                src={Eyes ? secret : show}
                alt="show"
              />

              {validLogin === false ? (
                <FailedLoginDiv>
                  <FailedLoginP>
                    아이디 또는 비밀번호를 잘못 입력했습니다.
                  </FailedLoginP>
                  <FailedLoginP>입력하신 내용을 다시 확인해주세요</FailedLoginP>
                </FailedLoginDiv>
              ) : null}

              <AutomaticLoginDiv onClick={CircleFunc}>
                <CircleImage src={Circle ? checkCircle : emptyCircle} />
                자동 로그인
              </AutomaticLoginDiv>

              {validLogin ? (
                <Link to="/Home" style={{ textDecoration: "none" }}>
                  <Submit type="submit" value="로그인" />
                </Link>
              ) : (
                <Submit type="submit" value="로그인" />
              )}
            </Form>

            <SearchDiv>
              <SearchList>
                <SearchLink to="#">아이디 찾기</SearchLink>
              </SearchList>
              <Div2></Div2>
              <SearchList>
                <SearchLink to="#">비밀번호 찾기</SearchLink>
              </SearchList>
              <Div2></Div2>
              <SearchList>
                <SearchLink to="/users/auth/signup">회원가입</SearchLink>
              </SearchList>
            </SearchDiv>
          </MainDiv>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}
