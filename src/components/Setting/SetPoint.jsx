import React from 'react'
import srcGoBtn from '../../images/Setting/goBtn.png'

export default function SetPoint() {
  return (
    <div className='container-Setting'>
        <p className='title-Setting'>포인트</p>
        <div className='content-Setting'>
            <p className='text-Setting'>포인트 내역 조회</p>
            <img src={srcGoBtn} alt="" style={{width:'7px', height:'16px'}}/>
        </div>
        <div className='content-Setting'>
            <p className='text-Setting'>포인트 전환</p>
            <img src={srcGoBtn} alt="" style={{width:'7px', height:'16px'}}/>
        </div>
        <div className='content-Setting'>
            <p className='text-Setting'>내 쿠폰함</p>
            <img src={srcGoBtn} alt="" style={{width:'7px', height:'16px'}}/>
        </div>
    </div>
    )
}
