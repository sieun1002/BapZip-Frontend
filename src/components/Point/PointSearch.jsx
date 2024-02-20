import React, { useState, useEffect } from "react";
import api from "../../api/LoginTokenApi";

import { BodyDiv, WrapperDiv, Div } from "../../styles/Point/Point.styled";
import {
  SearchNav,
  SearchDetailSetting,
  ArrowBottomImg,
  SearchSelect,
  PointSearchDiv,
  PointSearchPDiv,
  PointSearchP1,
  PointSearchP2,
  PointSearchP3,
  PointSearchLine,
} from "../../styles/Point/PointSearch.styled";

import arrowBottom from "../../images/Point/arrowBottom.svg";

export default function PointSearch() {
  const [PointLists, setPointLists] = useState([]);

  useEffect(() => {
    const PointListsApi = async () => {
      try {
        const url = `https://babzip.seunga.shop/point/myPoint`;

        const response = await api.get(url);
        setPointLists(response.data.result);
        console.log(response.data.result);
      } catch (error) {
        console.error("가게 세부 정보 가져오기 실패", error);
      }
    };

    PointListsApi();
  }, []);
  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <SearchNav>
            <SearchDetailSetting>조회 세부 설정</SearchDetailSetting>
            <SearchSelect>
              전체
              <ArrowBottomImg src={arrowBottom} />
            </SearchSelect>
            <SearchSelect>
              1년
              <ArrowBottomImg src={arrowBottom} />
            </SearchSelect>
          </SearchNav>

          {[...PointLists].reverse().map((list, index) => (
            <React.Fragment key={index}>
              <PointSearchDiv>
                <PointSearchPDiv>
                  <PointSearchP1>{list.note}</PointSearchP1>
                  {/* api에 날짜가 없음 */}
                  <PointSearchP2>{list.date}</PointSearchP2>
                </PointSearchPDiv>
                {list.point > 0 ? (
                  <PointSearchP3>+{list.point}P</PointSearchP3>
                ) : (
                  <PointSearchP3>{list.point}P</PointSearchP3>
                )}
              </PointSearchDiv>
              <PointSearchLine />
            </React.Fragment>
          ))}
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}
