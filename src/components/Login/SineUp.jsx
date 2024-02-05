import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/user/userSlice";
import { useSignUp } from "../../context/SignUpContext";
import axios from "axios";
import {
  BodyDiv,
  WrapperDiv,
  Div,
} from "../../styles/Login/LoginSelection.style";
import { Link } from "react-router-dom";

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

export default function SineUp() {
  const dispatch = useDispatch();

  const { userInfo, setUserInfo } = useSignUp();

  const [form, setForm] = useState({
    nickName: "",
    id: "",
    password: "",
    passwordCheck: "",
    schoolAndMajor: "",
    schoolEmail: "",
    schoolEmailCheck: "",
  });

  const [validNickName, setValidNickName] = useState(null);
  const [validId, setValidId] = useState(null);
  const [validPassword, setValidPassword] = useState(null);
  const [validPasswordCheck, setValidPasswordCheck] = useState(null);
  const [validSchoolAndMajor, setValidSchoolAndMajor] = useState(null);
  const [validSchoolEmail, setValidSchoolEmail] = useState(null);
  const [validSchoolMailCheck, setValidSchoolEmailCheck] = useState(null);

  const handleNNCh = (e) => {
    const nickName = e.target.value;
    setForm({ ...form, nickName });
    setUserInfo({ ...userInfo, nickName: e.target.value });
  };

  //닉네임 중복 확인 함수
  const handeleNickNameAPI = async () => {
    try {
      // 닉네임 입력 값 가져오기
      //API 요청 URL
      const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/users/auth/checkNickname?nickname=${form.nickName}`;

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await axios.get(url);

      //잘 됐는지 확인
      console.log(response.data.result.available);

      //응답으로 받은 닉네임 사용 가능 여부에 따라 상태 업데이트
      const available = response.data.result.available;
      setValidNickName(available);
    } catch (error) {
      console.error(
        "NickName check error",
        error.response ? error.response.data : error
      );
      //에러 상황에 대한 처리 로직 추가
    }
  };

  const handleIdCh = (e) => {
    const id = e.target.value;
    setForm({ ...form, id });

    if (id.trim() === "") {
      setValidId(null);
    }

    setUserInfo({ ...userInfo, id: e.target.value });
  };

  //아이디 중복 확인 함수
  const handeleIdAPI = async () => {
    try {
      // 아이디 입력 값 가져오기
      //API 요청 URL
      const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/users/auth/checkUserid?userid=${form.id}`;

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await axios.get(url);

      //잘 됐는지 확인
      console.log(response.data.result.available);

      //응답으로 받은 아이디사용 가능 여부에 따라 상태 업데이트
      const available = response.data.result.available;
      setValidId(available);
    } catch (error) {
      console.error(
        "ID check error",
        error.response ? error.response.data : error
      );
      //에러 상황에 대한 처리 로직 추가
    }
  };

  const handlePWCh = (e) => {
    const password = e.target.value;
    setForm({ ...form, password });

    if (password.trim() === "") {
      setValidPassword(null);
    } else {
      const isValidPassword =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(
          password
        );
      setValidPassword(isValidPassword);
    }

    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const handlePWChCh = (e) => {
    const passwordCheck = e.target.value;
    setForm({ ...form, passwordCheck });

    if (passwordCheck.trim() === "") {
      setValidPasswordCheck(null);
    } else {
      const isValidPasswordCheck = passwordCheck === form.password;
      setValidPasswordCheck(isValidPasswordCheck);
    }

    setUserInfo({ ...userInfo, passwordCheck: e.target.value });
  };

  const handleSchM = (e) => {
    const schoolAndMajor = e.target.value;
    setForm({ ...form, schoolAndMajor });

    if (schoolAndMajor.trim() === "") {
      setValidSchoolAndMajor(null);
    }
  };

  const handleSchEM = (e) => {
    const schoolEmail = e.target.value;
    setForm({ ...form, schoolEmail });

    if (schoolEmail.trim() === "") {
      setValidSchoolEmail(null);
    }

    setUserInfo({ ...userInfo, schoolEmail: e.target.value });
  };

  const handleSchEMCh = (e) => {
    const schoolEmailCheck = e.target.value;
    setForm({ ...form, schoolEmailCheck });

    if (schoolEmailCheck.trim() === "") {
      setValidSchoolEmailCheck(null);
    }

    setUserInfo({ ...userInfo, schoolEmailCheck: e.target.value });
  };

  return (
    <BodyDiv>
      <WrapperDiv justifyContent="flex-start">
        <Div height="100%">
          <HeaderDiv>
            <SearchLink to="/users/auth/sigin">
              <ArrowLeftImage src={arrowLeft} alt="arrowLeft" />
            </SearchLink>
            <PDiv>회원가입</PDiv>
          </HeaderDiv>
          <Form margin="auto" padding="45px 0">
            <Label htmlFor="nickName">닉네임</Label>
            <InputDiv>
              <Input
                type="text"
                id="nickName"
                value={form.nickName}
                onChange={handleNNCh}
                placeholder="닉네임을 입력해 주세요."
                width="330px"
              />
              <Button type="button" onClick={handeleNickNameAPI}>
                중복 확인
              </Button>
            </InputDiv>

            {validNickName === false ? (
              <CheckDivX>중복된 닉네임입니다.</CheckDivX>
            ) : validNickName === true ? (
              <CheckDivO>사용 가능한 닉네임입니다.</CheckDivO>
            ) : (
              <CheckDivX></CheckDivX>
            )}

            <Label htmlFor="id">아이디</Label>
            <InputDiv>
              <Input
                type="text"
                id="id"
                value={form.id}
                onChange={handleIdCh}
                placeholder="아이디를 입력해 주세요."
                width="330px"
              />
              <Button type="button" onClick={handeleIdAPI}>
                중복 확인
              </Button>
            </InputDiv>

            {validId === false ? (
              <CheckDivX>중복된 아이디입니다.</CheckDivX>
            ) : validId === true ? (
              <CheckDivO>사용 가능한 아이디입니다.</CheckDivO>
            ) : (
              <CheckDivX></CheckDivX>
            )}

            <Label htmlFor="password">비밀번호</Label>
            <InputDiv>
              <Input
                type="password"
                id="password"
                value={form.password}
                onChange={handlePWCh}
                placeholder="비밀번호를 입력해 주세요."
              />
            </InputDiv>

            <InputDiv>
              <Input
                type="password"
                id="passwordCheck"
                value={form.passwordCheck}
                onChange={handlePWChCh}
                placeholder="비밀번호 확인."
              />
            </InputDiv>

            {validPassword === false ? (
              <CheckDivX>
                비밀번호를 영문, 숫자, 특수문자 포함 8~12자리로 설정해주세요.
              </CheckDivX>
            ) : validPassword === true ? (
              <CheckDivO>사용 가능한 비밀번호입니다.</CheckDivO>
            ) : (
              <CheckDivX></CheckDivX>
            )}

            <Label htmlFor="schoolAndMajor">학교 및 전공</Label>
            <InputDiv>
              <Input
                type="text"
                id="schoolAndMajor"
                value={form.schoolAndMajor}
                onChange={handleSchM}
                placeholder="학교와 전공을 입력해 주세요."
                width="330px"
              />
              <Link to="/SineUp/Select_School">
                <Button>입력하기</Button>
              </Link>
            </InputDiv>
            <CheckDivX></CheckDivX>

            <Label htmlFor="schoolEmail">본인 인증</Label>
            <InputDiv>
              <Input
                type="email"
                id="schoolEmail"
                value={form.schoolEmail}
                onChange={handleSchEM}
                placeholder="학교 이메일을 입력해 주세요."
                width="330px"
              />

              <Button>인증 요청</Button>
            </InputDiv>

            <InputDiv>
              <Input
                type="text"
                id="schoolEmailCheck"
                value={form.schoolEmailCheck}
                onChange={handleSchEMCh}
                placeholder="인증번호 입력"
              />
            </InputDiv>

            {/* <CheckDivX>인증번호가 올바르지 않습니다.</CheckDivX> */}
            {/* <CheckDivO>모두 인증 완료되었습니다.</CheckDivO> */}
            <CheckDivX></CheckDivX>
          </Form>

          <Link
            to="/SineUp/SineUp-Completion"
            style={{
              textDecoration: "none",
            }}
          >
            <Submit
              type="submit"
              value="회원 가입"
              backgroundColor="#EDEDED"
              marginBottom="30px"
            />
          </Link>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}
