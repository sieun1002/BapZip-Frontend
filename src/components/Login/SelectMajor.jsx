import { React, useState } from "react";
import { useSignUp } from "../../context/SignUpContext";
import axios from "axios";
import {
  BodyDiv,
  WrapperDiv,
  Div,
} from "../../styles/Login/LoginSelection.style";
import { HeaderDiv, Submit } from "../../styles/Login/Login2.style";
import {
  XImage,
  MainPDiv,
  MainP,
  Highlight,
  SearchBox,
  SearchImag,
  SearchBoxDiv,
  ExPDiv,
  ExP1,
  ExP2,
  CircleImgDiv,
  CircleImage,
  ArrowLeftImage,
} from "../../styles/Login/Select.style";

import { Link } from "react-router-dom";

import arrowLeft from "../../images/Login/arrowLeft.svg";
import X from "../../images/Login/X.svg";
import search from "../../images/Login/search.svg";
import yellowCircle from "../../images/Login/yellowCircle.svg";

export default function SelectMajor() {
  const { userInfo, setUserInfo } = useSignUp();
  const [majorCheck, setMajorCheck] = useState(false);

  const schoolId = userInfo.school_id;

  const [form, setForm] = useState({
    major: "",
  });

  const handleMajorApi = async () => {
    try {
      console.log(schoolId);
      //API 요청 URL
      const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/school/major?schoolId=${schoolId}&majorName=${form.major}`;

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await axios.get(url);

      //잘 됐는지 확인
      console.log(response.data.result[0].name);
      console.log(response.data.result[0].id);

      // 전공 이름 저장
      const major = response.data.result[0].name;
      setForm({ ...form, major });

      //전공 아이디 저장
      const major_id = response.data.result[0].id;

      setUserInfo((userInfo) => ({
        ...userInfo,
        major: major,
        major_id: major_id,
      }));
      setMajorCheck(true);

      console.log("test2");
      console.log(userInfo);
    } catch (error) {
      console.error(
        "major check error",
        error.response ? error.response.data : error
      );
      //에러 상황에 대한 처리 로직 추가
    }
  };

  return (
    <BodyDiv>
      <WrapperDiv>
        <Div>
          <HeaderDiv justifyContent="space-between">
            <Link to="/SineUp/Select_school">
              <ArrowLeftImage src={arrowLeft} alt="arrowLeft" />
            </Link>

            <Link to="/users/auth/signup">
              <XImage src={X} alt="X" />
            </Link>
          </HeaderDiv>

          <MainPDiv>
            <MainP></MainP>
            <MainP>
              어떤 <Highlight> 전공 </Highlight>이신가요?
            </MainP>
          </MainPDiv>

          <SearchBoxDiv>
            <form>
              <SearchBox
                placeholder="전공명 검색"
                name="major"
                id="major"
                value={form.major}
                onChange={(e) => setForm({ ...form, major: e.target.value })}
              />
            </form>

            <SearchImag onClick={handleMajorApi} src={search} alt="search" />
          </SearchBoxDiv>

          <ExPDiv>
            <ExP1>입력 예시</ExP1>
            <ExP2>컴퓨터공학전공 (O)</ExP2>
            <ExP2>컴공 (X)</ExP2>
          </ExPDiv>

          <CircleImgDiv>
            <CircleImage src={yellowCircle} />
            <CircleImage src={yellowCircle} />
          </CircleImgDiv>

          {majorCheck === false ? (
            <Submit
              type="submit"
              value="입력하기"
              backgroundColor="#EDEDED"
              marginBottom="30px"
            />
          ) : (
            <Link
              to="/users/auth/signup"
              style={{
                textDecoration: "none",
                marginBottom: "30px",
                cursor: "default",
              }}
            >
              <Submit type="submit" value="다음" />
            </Link>
          )}
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}
