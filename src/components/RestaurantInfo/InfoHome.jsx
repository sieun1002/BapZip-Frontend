import React, { useState, useEffect, useRef } from "react";
import api from "../../api/LoginTokenApi";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import {
  BodyDiv,
  WrapperDiv,
  Div,
} from "../../styles/RestaurantInfo/RestaurantInfo.styled";
import {
  InfoDiv,
  InfoMainP1,
  InfoPdiv,
  InfoTitleP,
  InfoContentP,
  InfoContentDiv,
  AddressImage,
  BreakLine,
  TodayNoticeDiv,
  TodayNoticeTitileDiv,
  TodayNoticeTitleP,
  TodayNoticeFullView,
  TodayNoticeContentDiv,
  InfoContentP2Div,
} from "../../styles/RestaurantInfo/InfoHome.styled";

import InfoChat from "./InfoChat";

import address from "../../images/RestaurantInfo/address.svg";

export default function InfoHome() {
  //가게 기본 정보 api 연결
  const [detailRestaurantInfo, setDetailRestaurantInfo] = useState({});
  const [notice, setNotice] = useState({});

  //URL에서 storeId 추출
  // const {storeId} = useParams();
  const { storeId } = 5;

  useEffect(() => {
    const detailRestaurantInfoApi = async () => {
      try {
        // const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/${storeId}/detailinfo`;
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/11/detailinfo/`;

        const response = await api.get(url);
        setDetailRestaurantInfo(response.data.result);
        console.log(response.data.result);
      } catch (error) {
        console.error("가게 세부 정보 가져오기 실패", error);
      }
    };

    const noticeApi = async () => {
      try {
        // const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/${storeId}/detailinfo`;
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/5/notice`;

        const response = await api.get(url);
        setNotice(response.data.result);
        console.log(response.data.result);
      } catch (error) {
        console.log("오늘의 공지 가져오기 실패", error);
      }
    };
    detailRestaurantInfoApi();
    noticeApi();
  }, [storeId]);

  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          {/* <InfoNavDiv>
            <InfoNav color="#FFBA35">홈</InfoNav>
            <InfoNav>메뉴</InfoNav>
            <InfoNav>리뷰</InfoNav>
            <InfoNav>실시간 채팅</InfoNav>
          </InfoNavDiv> */}
          <InfoDiv>
            <InfoMainP1>가게정보</InfoMainP1>
            {/*벡 정보 가져와야 함. 반복문 써야할 듯*/}

            <InfoPdiv>
              <InfoTitleP>평균 웨이팅</InfoTitleP>

              <InfoContentDiv>
                <InfoContentP>
                  {detailRestaurantInfo.waitingAverage} 이내
                </InfoContentP>
              </InfoContentDiv>
            </InfoPdiv>
            <InfoPdiv>
              <InfoTitleP>영업시간</InfoTitleP>
              <InfoContentDiv>
                <InfoContentP>
                  {detailRestaurantInfo.businessHours}
                </InfoContentP>
              </InfoContentDiv>
            </InfoPdiv>
            <InfoPdiv>
              <InfoTitleP>정기 휴무</InfoTitleP>
              <InfoContentDiv>
                <InfoContentP>{detailRestaurantInfo.closedDay}</InfoContentP>
              </InfoContentDiv>
            </InfoPdiv>
            <InfoPdiv>
              <InfoTitleP>위치</InfoTitleP>

              <InfoContentDiv>
                <InfoContentP>{detailRestaurantInfo.position}</InfoContentP>
                {/*누르면 복사되는 기능 추가*/}
                <InfoContentP2Div>
                  <AddressImage src={address} alt="address" />
                  <CopyToClipboard
                    text={detailRestaurantInfo.position}
                    onCopy={() => alert("클립보드에 복사되었습니다.")}
                  >
                    <InfoContentP textDecoration="underline" cursor="pointer">
                      주소 복사
                    </InfoContentP>
                  </CopyToClipboard>
                </InfoContentP2Div>
              </InfoContentDiv>
            </InfoPdiv>
          </InfoDiv>
          <BreakLine></BreakLine>
          <TodayNoticeDiv>
            <TodayNoticeTitileDiv>
              <TodayNoticeTitleP>오늘의 공지</TodayNoticeTitleP>
              <TodayNoticeFullView>전체 보기</TodayNoticeFullView>
            </TodayNoticeTitileDiv>
            {notice.notice === null ? (
              <TodayNoticeContentDiv>
                등록된 공지가 없습니다.
              </TodayNoticeContentDiv>
            ) : (
              <TodayNoticeContentDiv>{notice.notice}</TodayNoticeContentDiv>
            )}
          </TodayNoticeDiv>
          <BreakLine></BreakLine>
          <InfoChat></InfoChat>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}
