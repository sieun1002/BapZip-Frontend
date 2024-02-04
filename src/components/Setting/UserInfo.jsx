import React from 'react'
import srcGoBtn from '../../images/Setting/goBtn.png'

export default function UserInfo() {
  return (
    <div className='container-Setting'>
        <p className='title-Setting'>회원 정보</p>
        <div className='content-Setting'>
            <p className='text-Setting'>내 정보 수정</p>
            <img src={srcGoBtn} alt="" style={{width:'7px', height:'16px'}}/>
        </div>
        <div className='content-Setting'>
            <p className='text-Setting'>내 프로필 수정</p>
            <img src={srcGoBtn} alt="" style={{width:'7px', height:'16px'}}/>
        </div>
    </div>
  )
}
