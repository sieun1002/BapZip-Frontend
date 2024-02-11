import React, { useState } from 'react'
import api from "../../api/LoginTokenApi";
import srcCouponBack from "../../images/Coupon/coupon1.png"
import srcCouponBtn from "../../images/Coupon/coupon1Btn.png"

export default function AvailableC() {
  const [couponData,setData] = useState([]);

  const urlget = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/coupon/available`;
  function getCoupon(){
    api.get(urlget)
    .then(function(response){
      setData(response.data.result);
    })
    .catch(function(error){
      console.log(error.message);
    });
  }
  if(!couponData[0]){
    getCoupon();
  }
  return (
    <div className='availableC-Coupon'>
      {couponData.length?
      <div className='result-availableC'>
        {couponData.map((item)=>{
          return(
            <div className='container-availableC' style={{ backgroundImage: `url(${srcCouponBack})`, backgroundSize: "cover"}} key={item.couponId}>
              <div className='detail-availableC'>
                <p className='price-detail'>{item.amount}원</p>
                <div className='date-detail'>
                  <p className='startDate-detail'>발급일 {item.startDate}</p>
                  <p className='finalDate-detail'>사용기간 {item.finalDate} 까지</p>
                </div>
              </div>
              <div className='btn-availableC'>
                <p className='text-btn'>바로 사용하기</p>
                <img src={srcCouponBtn} alt="" style={{width:'38px', height:'38px'}}/>
              </div>
            </div>
          )
        })}
      </div>:""}
    </div>
  )
}
