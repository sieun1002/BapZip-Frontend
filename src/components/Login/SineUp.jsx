import React, { useState } from "react";
// 상태 관리
import { useSignUp } from "../../context/SignUpContext";
//리덕스
import { useDispatch } from "react-redux";
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
  //리덕스
  const dispatch = useDispatch();
  //상태 관리
  const { userInfo, setUserInfo, validations, setValidations } = useSignUp();

  // form  관리
  const [form, setForm] = useState({
    nickName: userInfo.nickName,
    id: userInfo.id,
    password: userInfo.password,
    passwordCheck: userInfo.passwordCheck,
    schoolAndMajor: `${userInfo.school || ""} ${userInfo.major || ""}`.trim(),
    schoolEmail: userInfo.schoolEmail,
    schoolEmailCheck: userInfo.schoolEmailCheck,
  });

  //각 input의 valid 관련 (입력 값 확인)
  const [validNickName, setValidNickName] = useState(
    validations.isNickNameValid
  );
  const [validId, setValidId] = useState(validations.isIdValid);
  const [validPassword, setValidPassword] = useState(
    validations.isPasswordValid
  );
  const [validPasswordCheck, setValidPasswordCheck] = useState(
    validations.isPasswordCheckValid
  );

  const validSchoolAndMajor = validations.isSchoolAndMajor;
  const [validSchoolEmail, setValidSchoolEmail] = useState(null);
  const [validSchoolMailCheck, setValidSchoolEmailCheck] = useState(null);

  //인증번호 상태 관리..
  const [authenticationsNum, setAuthenticationNum] = useState(null);

  //닉네임 입력
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
      setValidations({ ...validations, isNickNameValid: available });
    } catch (error) {
      console.error(
        "NickName check error",
        error.response ? error.response.data : error
      );
      //에러 상황에 대한 처리 로직 추가
    }
  };

  //아이디 입력
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
      setValidations({ ...validations, isIdValid: available });
    } catch (error) {
      console.error(
        "ID check error",
        error.response ? error.response.data : error
      );
      //에러 상황에 대한 처리 로직 추가
    }
  };

  //비번 입력
  const handlePWCh = (e) => {
    const password = e.target.value;
    setForm((prevForm) => ({ ...prevForm, password }));
    setUserInfo({ ...userInfo, password: password });

    if (password.trim() === "") {
      setValidPassword(null);
    } else {
      //비번 유효성 체크
      const isValidPassword =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(
          password
        );
      setValidPassword(isValidPassword);
      //validations 상태 업데이트
      setValidations({ ...validations, isPasswordValid: isValidPassword });
    }
  };

  //비번 체크 입력
  const handlePWChCh = (e) => {
    const passwordCheck = e.target.value;
    setForm((prevForm) => ({ ...prevForm, passwordCheck }));
    setUserInfo({ ...userInfo, passwordCheck: passwordCheck });

    if (passwordCheck.trim() === "") {
      setValidPasswordCheck(null);
    } else if (passwordCheck === userInfo.password) {
      setValidPassword(null);
      setValidPasswordCheck(true);
      setValidations({ ...validations, isPasswordValid: null });
      setValidations({ ...validations, isPasswordCheckValid: true });
      console.log(validations);
    } else {
      setValidPassword(null);
      setValidPasswordCheck(false);
      setValidations({ ...validations, isPasswordValid: null });
      setValidations({ ...validations, isPasswordCheckValid: false });
      console.log(validations);
    }

    //userInfo passwordChaeck 업데이트
    setUserInfo({ ...userInfo, passwordCheck: e.target.value });
  };

  //학교 이메일 입력
  const handleSchEM = (e) => {
    const schoolEmail = e.target.value;
    setForm({ ...form, schoolEmail });

    if (schoolEmail.trim() === "") {
      setValidSchoolEmail(null);
    }

    //userInfo schoolEmail 업데이트
    setUserInfo({ ...userInfo, schoolEmail: e.target.value });
  };

  const handleSchoolEmailApi = async () => {
    try {
      //API 요청 URL
      const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/mail?mail=${form.schoolEmail}`;

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await axios.get(url);

      //잘 됐는지 확인
      console.log("이메일 통신 잘 됐는지 확인");
      console.log(response.data.message);

      //이메일 인증번호 저장
      setAuthenticationNum(response.data.result.number);
    } catch (error) {
      console.error(
        "emailCheck error",
        error.response ? error.response.data : error
      );
      //에러 상황에 대한 처리 로직 추가
    }
  };
  // 인증번호 입력
  const handleSchEMCh = (e) => {
    const schoolEmailCheck = e.target.value;
    setForm({ ...form, schoolEmailCheck });

    if (schoolEmailCheck.trim() === "") {
      setValidSchoolEmailCheck(null);
    }

    //userInfo schoolEmailCheck 업데이트
    setUserInfo({ ...userInfo, schoolEmailCheck: e.target.value });
  };

  const handleSchEmChButton = () => {
    const userAuthentications_num = form.schoolEmailCheck;
    if (userAuthentications_num == authenticationsNum) {
      setValidSchoolEmailCheck(true);
      console.log("인증번호 true");
    } else {
      setValidSchoolEmailCheck(false);
      console.log("인증번호 false");
    }
  };

  //회원가입 API
  const handleSignUpApi = async () => {
    try {
      //API 요청 URL
      const url =
        "http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/users/auth/signup";

      //요청 본문에 포함될 데이터
      const data = {
        userId: userInfo.id,
        password: userInfo.password,
        nickname: userInfo.nickName,
        school: userInfo.school_id,
        major: userInfo.major_id,
        email: userInfo.schoolEmail,
      };

      //axios.post 메소드를 사용하여 요청을 보냄
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json", // 명시적으로 Content-Type 헤더 설정
        },
      });

      //회원가입 성공 처리
      console.log("SignUp successful", response.data.message);
      const SignUpId = response.data.result.id;
      setUserInfo({ ...userInfo, SignUpId: SignUpId });
    } catch (error) {
      //회원가입 실패 또는 에러 처리
      console.error("Sign error", error.response ? error.response.data : error);
      //에러 상황에 대한 처리 로직 추가.
    }
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
              {validNickName === true ? (
                <Button
                  type="button"
                  onClick={handeleNickNameAPI}
                  bgColor="#ffba35"
                  color="#FFFFFF"
                >
                  확인 완료
                </Button>
              ) : (
                <Button type="button" onClick={handeleNickNameAPI}>
                  중복 확인
                </Button>
              )}
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
              {validId === true ? (
                <Button
                  type="button"
                  onClick={handeleIdAPI}
                  bgColor="#ffba35"
                  color="#FFFFFF"
                >
                  확인 완료
                </Button>
              ) : (
                <Button type="button" onClick={handeleIdAPI}>
                  중복 확인
                </Button>
              )}
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
            ) : null}

            {validPassword === null && validPasswordCheck === null ? (
              <CheckDivX></CheckDivX>
            ) : null}

            {validPasswordCheck === false ? (
              <CheckDivX>비밀번호가 일치하지 않습니다.</CheckDivX>
            ) : validPasswordCheck === true ? (
              <CheckDivO>비밀번호가 일치합니다.</CheckDivO>
            ) : null}

            <Label htmlFor="schoolAndMajor">학교 및 전공</Label>
            {console.log(userInfo.school)}
            <InputDiv>
              <Input
                type="text"
                id="schoolAndMajor"
                // value={form.schoolAndMajor}
                value={form.schoolAndMajor}
                placeholder="학교와 전공을 입력해 주세요."
                width="330px"
              />

              {validSchoolAndMajor === true ? (
                <Button
                  type="button"
                  onClick={handeleNickNameAPI}
                  bgColor="#ffba35"
                  color="#FFFFFF"
                >
                  입력 완료
                </Button>
              ) : (
                <Link to="/SineUp/Select_School">
                  <Button>입력하기</Button>
                </Link>
              )}
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

              {validSchoolMailCheck === true ? (
                <Button
                  type="button"
                  onClick={handeleNickNameAPI}
                  bgColor="#ffba35"
                  color="#FFFFFF"
                >
                  인증 완료
                </Button>
              ) : (
                <Button type="button" onClick={handleSchoolEmailApi}>
                  인증 요청
                </Button>
              )}
            </InputDiv>

            <InputDiv>
              <Input
                type="text"
                id="schoolEmailCheck"
                value={form.schoolEmailCheck}
                onChange={handleSchEMCh}
                placeholder="인증번호 입력"
                width="330px"
              />

              {validSchoolMailCheck === true ? (
                <Button type="button" bgColor="#ffba35" color="#FFFFFF">
                  인증 확인
                </Button>
              ) : (
                <Button type="button" onClick={handleSchEmChButton}>
                  인증 확인
                </Button>
              )}
            </InputDiv>

            {validSchoolMailCheck === false ? (
              <CheckDivX>인증번호가 올바르지 않습니다.</CheckDivX>
            ) : validSchoolMailCheck === true ? (
              <CheckDivO>모두 인증 완료되었습니다.</CheckDivO>
            ) : (
              <CheckDivX></CheckDivX>
            )}
            <CheckDivX></CheckDivX>
          </Form>

          {validNickName &&
          validId &&
          validPassword &&
          validPasswordCheck &&
          validSchoolAndMajor &&
          validSchoolMailCheck ? (
            <Link
              to="/SineUp/SineUp-Completion"
              style={{
                textDecoration: "none",
              }}
            >
              <Submit
                onClick={handleSignUpApi}
                type="submit"
                value="회원 가입"
                backgroundColor="#ffba35"
                marginBottom="30px"
              />
            </Link>
          ) : (
            <Submit
              type="submit"
              value="회원 가입"
              backgroundColor="#EDEDED"
              marginBottom="30px"
            />
          )}
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}
