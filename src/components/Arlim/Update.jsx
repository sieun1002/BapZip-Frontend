import React, { useEffect } from "react";
import axios from "axios"; // axios를 import합니다.
import UpdateImage from "../../images/Arlim/updateimage.PNG"; // Updateimage에 이미지 경로를 적절히 수정

const urlpost =
  "http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/users/auth/signin";
function getToken() {
  axios
    .post(urlpost, {
      userId: "id1",
      password: "1234",
    })
    .then(function (response) {
      //getStore
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.result.token}`;
      getStore(); //여기 부분 함수 제거하고 함수 만들어서 넣으면 됨
    })
    .catch(function (error) {
      console.log(error.message);
    });
}

export default function Arlim() {
  return (
    <div>
      <div className="updatediv">
        <div className="txtdate">2024-01-30</div>
        <div className="txtupdate2">서비스 버전 업데이트 안내</div>
        <div className="txtline" />
        <div className="updateimg">
          <img src={UpdateImage} alt="실시간 이미지" />
        </div>
      </div>
      <div className="updatediv">
        <div className="txtdate">2024-01-30</div>
        <div className="txtupdate">덕성식당 이벤트 당첨자 발표</div>
        <div className="txtline" />
        <div className="updateimg">
          <img src={UpdateImage} alt="실시간 이미지" />
        </div>
      </div>
      <div className="updatediv">
        <div className="txtdate">2024-01-30</div>
        <div className="txtupdate">이벤트 프로모션 종료 안내</div>
        <div className="txtline" />
        <div className="updateimg">
          <img src={UpdateImage} alt="실시간 이미지" />
        </div>
      </div>
      <div className="updatediv">
        <div className="txtdate">2024-01-30</div>
        <div className="txtupdate3">서비스 오픈 안내</div>
        <div className="txtline" />
        <div className="updateimg">
          <img src={UpdateImage} alt="실시간 이미지" />
        </div>
      </div>
    </div>
  );
}
