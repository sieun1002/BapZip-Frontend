import React from 'react'

import scraddImgBtn from '../../images/BottomNav4/addImgBtn.png'

export default function Profile() {
  const name = "밥좋아";
  const school = "밥ZIP대학교";
  const major = "끼니분석학과"
  return (
    <div className='profile-BottomNav4'>
        <div className='imageSection-profile'>
            <div className='img-profile' style={{backgroundImage:{}}}/>
            <img src={scraddImgBtn} alt="추가버튼" className='addImgBtn-profile' />
        </div>
        <div className='textSection-profile'>
            <p className='name-profile'>{name}님</p>
            <div className='edu-profile'>
                <p className='school-profile'>{school}</p>
                <p>|</p>
                <p className='major-profile'>{major}</p>
            </div>
        </div>
    </div>
  )
}
