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
  SearchListWrapper,
  SearchListDiv,
} from "../../styles/Login/Select.style";

import { Link } from "react-router-dom";

import arrowLeft from "../../images/Login/arrowLeft.svg";
import X from "../../images/Login/X.svg";
import search from "../../images/Login/search.svg";
import yellowCircle from "../../images/Login/yellowCircle.svg";

export default function SelectMajor() {
  const { userInfo, setUserInfo, validations, setValidations } = useSignUp();
  const [majorCheck, setMajorCheck] = useState(false);
  const [majorList, setMajorList] = useState([]);
  const [selectBox, setSelectBox] = useState(false);

  const schoolId = userInfo.school_id;

  const [form, setForm] = useState({
    major: "",
  });

  const handleMajorApi = async () => {
    try {
      //API 요청 URL
      const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/school/major?schoolId=${schoolId}&majorName=${form.major}`;

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await axios.get(url);

      console.log(response.data.result);

      setMajorList(response.data.result);

      setSelectBox(true);

      setValidations({ ...validations, isSchoolAndMajor: true });
    } catch (error) {
      console.error(
        "major check error",
        error.response ? error.response.data : error
      );
      //에러 상황에 대한 처리 로직 추가
    }
  };

  const clickMajor = (id, name) => {
    setForm((prevForm) => ({ ...prevForm, major: name }));
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      major: name,
      major_id: id,
    }));

    setSelectBox(false);
    setMajorCheck(true);
  };

  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
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

          {selectBox ? (
            majorList.length === 0 ? (
              <SearchListWrapper>
                <SearchListDiv>입력한 결과가 없습니다.</SearchListDiv>
              </SearchListWrapper>
            ) : (
              <SearchListWrapper>
                {majorList.map((major) => {
                  return (
                    <SearchListDiv
                      key={major.id}
                      onClick={() => clickMajor(major.id, major.name)}
                      bgColor="#fff8ec"
                    >
                      {major.name}
                    </SearchListDiv>
                  );
                })}
              </SearchListWrapper>
            )
          ) : null}

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
