import React, { useState } from 'react'
import api from "../../api/LoginTokenApi";
import srcCouponBack from "../../images/Coupon/coupon2.png"
import srcCouponBtn from "../../images/Coupon/coupon2Btn.png"

export default function ExpiredC() {
  const [couponData,setData] = useState([]);

  const urlget = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/coupon/expiration`;
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
    <div className='ExpiredC-Coupon'>
      {couponData.length?
      <div className='result-ExpiredC'>
        {couponData.map((item)=>{
          return(
            <div className='container-ExpiredC' style={{ backgroundImage: `url(${srcCouponBack})`, backgroundSize: "cover"}} key={item.couponId}>
              <div className='detail-ExpiredC'>
                <p className='price-detail'>{item.amount}원</p>
                <div className='date-detail'>
                  <p className='startDate-detail'>발급일 {item.startDate}</p>
                  <p className='finalDate-detail'>사용기간 {item.finalDate} 까지</p>
                </div>
              </div>
              <div className='btn-ExpiredC'>
                <p className='text-btn'>기간 만료</p>
                <img src={srcCouponBtn} alt="" style={{width:'38px', height:'38px'}}/>
              </div>
            </div>
          )
        })}
      </div>:""}
    </div>
  )
}
