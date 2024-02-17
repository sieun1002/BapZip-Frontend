import React, { useState, useRef, useEffect } from "react";
import { useSignUp } from "../../context/SignUpContext";

import api from "../../api/LoginTokenApi";
import {
  SearchSchoolWrapper,
  HeaderDiv,
  TitleP,
  SearchBarDiv,
  SearchImg,
  SearchInput,
  HeaderDiv2,
  CityAndDoDiv,
  CityAndDoDivs,
  SchoolDivs,
  AllDiv,
  AllCityAndDoDiv,
  AllSchoolDiv,
  AllCityAndDoWrapper,
  SchoolDiv,
  AllSchoolWrapper,
  ButtonWrapper,
  Button,
} from "../../styles/BottomNav1/SearchSchool.styled";

import scrSearchIcon from "../../images/WriteReview/searchIcon.png";

export default function SearchSchool({ setValidSearchSchool }) {
  const { setSchoolName } = useSignUp();
  const [cityAndDos, setcityAndDos] = useState([]);
  const [regionSchool, setRegionSchool] = useState([]);
  const [allSchool, setAllSchool] = useState([]);
  const [regionId, setRegionId] = useState(0);
  const [searchSchoolList, setSearchSchoolList] = useState([]);

  const [schoolId1, setSchoolId1] = useState();
  const [schoolName1, setSchoolName1] = useState();

  const [form, setForm] = useState({
    school: "",
  });

  useEffect(() => {
    const cityApi = async () => {
      try {
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/school/region`;

        const response = await api.get(url);
        setcityAndDos(response.data.result);

        console.log("지역 가져오기 ", response.data.result);
      } catch (error) {
        console.error("지역 가져오기 실패", error);
      }
    };

    const allSchoolApi = async () => {
      try {
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/school/all`;

        const response = await api.get(url);
        setAllSchool(response.data.result);

        console.log("모든 학교 가져오기", response.data.result);
      } catch (error) {
        console.error("모든 학교 가져오기 실패", error);
      }
    };

    cityApi();
    allSchoolApi();
  }, []);

  useEffect(() => {
    const regionSchoolApi = async () => {
      try {
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/school?regionId=${regionId}`;

        const response = await api.get(url);
        setRegionSchool(response.data.result);

        console.log("학교지역 가져오기", response.data.result);
      } catch (error) {
        console.error("학교지역 가져오기 실패", error);
      }
    };

    if (regionId !== 0) {
      regionSchoolApi();
    }
  }, [regionId]);

  const searchSchoolApi = async () => {
    try {
      //API 요청 URL
      const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/school/search?schoolName=${form.school}`;
      console.log("form.school", form.school);

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await api.get(url);

      console.log("학교 검색", response.data.result);
      setSearchSchoolList(response.data.result);
    } catch (error) {
      console.error(
        "school search error",
        error.response ? error.response.data : error
      );
    }
  };

  const handleRegion = (regionId) => {
    console.log(regionId);
    setRegionId(regionId);
    setForm({ ...form, school: "" });
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchSchoolApi();
    }
  };

  const clickSchool = (schoolId, schoolName) => {
    console.log("변경된 학교아이디", schoolId);
    setSchoolName1(schoolName);
    setSchoolId1(schoolId);
  };

  const clickButton = () => {
    localStorage.setItem("schoolId", schoolId1);
    localStorage.setItem("schoolName", schoolName1);
    setSchoolName(schoolName1);
    setValidSearchSchool(false);
  };

  return (
    <SearchSchoolWrapper>
      <HeaderDiv>
        <TitleP>학교 선택</TitleP>
        <SearchBarDiv>
          <SearchImg src={scrSearchIcon} />
          <form>
            <SearchInput
              id="school"
              placeholder="학교를 입력하세요. 예) 경희대학교"
              onKeyPress={handleOnKeyPress}
              onChange={(e) => setForm({ ...form, school: e.target.value })}
              // value={form.school}
            />
          </form>
        </SearchBarDiv>
      </HeaderDiv>

      <HeaderDiv2>
        <CityAndDoDivs bs="#D9D9D9">시 · 도</CityAndDoDivs>
        <SchoolDivs jc="center">학교명</SchoolDivs>
      </HeaderDiv2>

      <AllDiv>
        <AllCityAndDoWrapper>
          <AllCityAndDoDiv>
            <CityAndDoDiv fw="500" onClick={() => handleRegion(0)}>
              전국
            </CityAndDoDiv>
            {cityAndDos.map((cityAndDo, index) => (
              <CityAndDoDiv
                fw="500"
                key={index}
                onClick={() => handleRegion(cityAndDo.id)}
              >
                {cityAndDo.name}
              </CityAndDoDiv>
            ))}
          </AllCityAndDoDiv>
        </AllCityAndDoWrapper>

        <AllSchoolWrapper>
          <AllSchoolDiv>
            {form.school === ""
              ? regionId === 0
                ? allSchool.map((school, index) => (
                    <SchoolDiv
                      onClick={() => {
                        clickSchool(school.id, school.name);
                      }}
                      key={index}
                    >
                      {school.name}
                    </SchoolDiv>
                  ))
                : regionSchool.map((school, index) => (
                    <SchoolDiv
                      onClick={() => {
                        clickSchool(school.id, school.name);
                      }}
                      key={index}
                    >
                      {school.name}
                    </SchoolDiv>
                  ))
              : searchSchoolList.map((school, index) => (
                  <SchoolDiv
                    onClick={() => {
                      clickSchool(school.id, school.name);
                    }}
                    key={index}
                  >
                    {school.name}
                  </SchoolDiv>
                ))}
          </AllSchoolDiv>
        </AllSchoolWrapper>
      </AllDiv>

      <ButtonWrapper>
        <Button
          type="button"
          onClick={() => {
            setValidSearchSchool(false);
          }}
        >
          취소
        </Button>
        <Button
          onClick={() => {
            clickButton();
          }}
          type="button"
          bg="#FFBA35"
          color="#FFFFFF"
        >
          확인
        </Button>
      </ButtonWrapper>
    </SearchSchoolWrapper>
  );
}
