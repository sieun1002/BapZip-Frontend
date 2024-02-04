import React, { useState, useEffect } from "react";
import {
  BodyDiv,
  WrapperDiv,
  Div,
} from "../../styles/Login/LoginSelection.style";
import { Link } from "react-router-dom";
import { checkNicknameAvailability } from "../../api/loginApi";

import {
  ArrowLeftImage,
  Submit,
  Form,
  SearchLink,
  HeaderDiv,
  PDiv,
} from "../../styles/Login/Login2.style";
import {
  Label,
  Input,
  CheckDivO,
  CheckDivX,
  Button,
  InputDiv,
} from "../../styles/Login/SineUp.style";
import arrowLeft from "../../images/Login/arrowLeft.svg";

export default function SignUp() {
  const [form, setForm] = useState({
    nickName: "",
    id: "",
    password: "",
    passwordCheck: "",
    schoolAndMajor: "",
    schoolEmail: "",
    schoolEmailCheck: "",
  });

  const [validNickName, setValidNickName] = useState(false);
  const [validId, setValidId] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validPasswordCheck, setValidPasswordCheck] = useState(false);
  const [validSchoolAndMajor, setValidSchoolAndMajor] = useState(true); // 검증하지 않음, 예제에서는 true로 설정
  const [validSchoolEmail, setValidSchoolEmail] = useState(false);
  const [validSchoolEmailCheck, setValidSchoolEmailCheck] = useState(false);
  const [submitBtnColor, setSubmitBtnColor] = useState("#EDEDED");

  useEffect(() => {
    if (
      validNickName &&
      validId &&
      validPassword &&
      validPasswordCheck &&
      validSchoolAndMajor &&
      validSchoolEmail &&
      validSchoolEmailCheck
    ) {
      setSubmitBtnColor("#FFBA35");
    } else {
      setSubmitBtnColor("#EDEDED");
    }
  }, [
    validNickName,
    validId,
    validPassword,
    validPasswordCheck,
    validSchoolAndMajor,
    validSchoolEmail,
    validSchoolEmailCheck,
  ]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  // 여기에 유효성 검사 및 상태 업데이트 로직을 추가합니다.

  return (
    <BodyDiv>
      <WrapperDiv justifyContent="flex-start">
        <Div height="100%">
          <HeaderDiv>
            <Link to="/Login2">
              <img src={arrowLeft} alt="arrowLeft" />
            </Link>
            <p>회원가입</p>
          </HeaderDiv>
          <Form>
            {/* 닉네임 입력 필드 */}
            <Label htmlFor="nickName">닉네임</Label>
            <InputDiv>
              <Input
                id="nickName"
                value={form.nickName}
                onChange={handleChange}
                placeholder="닉네임을 입력해 주세요."
              />
              <Button onClick={() => setValidNickName(true)}>중복 확인</Button>
            </InputDiv>
            {validNickName && <CheckDivO>사용 가능한 닉네임입니다.</CheckDivO>}

            {/* 아이디 입력 필드 */}
            <Label htmlFor="id">아이디</Label>
            <InputDiv>
              <Input
                id="id"
                value={form.id}
                onChange={handleChange}
                placeholder="아이디를 입력해 주세요."
              />
              <Button onClick={() => setValidId(true)}>중복 확인</Button>
            </InputDiv>
            {validId && <CheckDivO>사용 가능한 아이디입니다.</CheckDivO>}

            {/* 비밀번호 및 비밀번호 확인 입력 필드 */}
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력해 주세요."
            />
            <Input
              id="passwordCheck"
              type="password"
              value={form.passwordCheck}
              onChange={handleChange}
              placeholder="비밀번호 확인."
            />
            {validPassword && validPasswordCheck && (
              <CheckDivO>비밀번호가 일치합니다.</CheckDivO>
            )}

            {/* 학교 이메일 입력 필드 */}
            <Label htmlFor="schoolEmail">학교 이메일</Label>
            <InputDiv>
              <Input
                id="schoolEmail"
                type="email"
                value={form.schoolEmail}
                onChange={handleChange}
                placeholder="학교 이메일을 입력해 주세요."
              />
              <Button
                onClick={() => {
                  setValidSchoolEmail(true);
                  setValidSchoolEmailCheck(true);
                }}
              >
                인증 요청
              </Button>
            </InputDiv>
            {validSchoolEmail && validSchoolEmailCheck && (
              <CheckDivO>이메일 인증이 완료되었습니다.</CheckDivO>
            )}

            {/* 회원가입 버튼 */}
            <Link
              to="/SineUp/SineUp-Completion"
              style={{ textDecoration: "none" }}
            >
              <Submit
                style={{ backgroundColor: submitBtnColor }}
                value="회원 가입"
              />
            </Link>
          </Form>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}
