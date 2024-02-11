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
        // const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/${storeId}/detailinfo`;
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/point/myPoint`;

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

          {PointLists.map((list, index) => (
            <React.Fragment key={index}>
              <PointSearchDiv>
                <PointSearchPDiv>
                  <PointSearchP1>{list.note}</PointSearchP1>
                  <PointSearchP2>2023.01.04</PointSearchP2>
                </PointSearchPDiv>
                <PointSearchP3>+10P</PointSearchP3>
              </PointSearchDiv>
              <PointSearchLine />
            </React.Fragment>
          ))}
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}
