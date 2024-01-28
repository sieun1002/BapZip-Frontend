import React, { useState } from "react";
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
} from "../../styles/Login/Login2.style";

import arrowLeft from "../../images/Login/arrowLeft.svg";
import emptyCircle from "../../images/Login/emptyCircle.svg";
import checkCircle from "../../images/Login/checkCircle.svg";
import show from "../../images/Login/show.svg";
import secret from "../../images/Login/secret.svg";

export default function Login2() {
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
            <Form>
              <Input
                type="id"
                id="id"
                value={Form.id}
                onChange={handleIdChange}
                placeholder="아이디"
              />
              <Input
                type={Eyes ? "text" : "password"}
                id="password"
                value={Form.password}
                onChange={handlePasswordChange}
                placeholder="비밀번호 (숫자, 영문 8~12자리)"
              />
              <EyesImage
                onClick={EyesFunc}
                src={Eyes ? secret : show}
                alt="show"
              />
            </Form>

            <AutomaticLoginDiv onClick={CircleFunc}>
              <CircleImage src={Circle ? checkCircle : emptyCircle} />
              자동 로그인
            </AutomaticLoginDiv>
            <Submit type="submit" value="로그인" />

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
                <SearchLink to="/SineUp">회원가입</SearchLink>
              </SearchList>
            </SearchDiv>
          </MainDiv>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}
