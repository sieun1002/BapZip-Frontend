import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
      setVaildPassword(null);
    }
  };

  const handleIdChange = (e) => {
    const id = e.target.value;
    setForm({ ...form, id });

    if (id.trim() === "") {
      setVaildId(null);
    }
  };

  const handleLogin = async () => {
    try {
      // const url =
      //   "http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/users/auth/signin";
      const url = "https://babzip.seunga.shop/users/auth/signin";

      const data = {
        userId: form.id,
        password: form.password,
      };

      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const userId = form.id;
      const token = response.data.result.token;
      dispatch(setCredentials({ userId, token }));
      localStorage.setItem("token", token);
      localStorage.setItem("userId", form.id);
      localStorage.setItem("schoolId", response.data.result.schoolId);

      setValidLogin(true);

      // 로그인 성공 후에 페이지 이동
      navigate("/home");
    } catch (error) {
      console.error(
        "Login error",
        error.response ? error.response.data : error
      );
      setValidLogin(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

              {validLogin === false ? (
                <Submit type="submit" value="로그인" />
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
