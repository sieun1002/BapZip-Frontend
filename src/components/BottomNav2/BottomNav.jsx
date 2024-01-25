import React from 'react'
import srcBtnHomeOff from '../../images/BottomNav2/btnHomeOff.png'
import srcBtnReviewOff from '../../images/BottomNav2/btnReviewOff.png'
import srcBtnListOff from '../../images/BottomNav2/btnListOff.png'
import srcBtnMypageOff from '../../images/BottomNav2/btnMypageOff.png'

export default function BottomNav() {
  return (
    <nav className='container-bottomNav'>
        <div className='btnHome'>
          <img src={srcBtnHomeOff} alt="btn"/>
        </div>
        <div className='btnReview'>
          <img src={srcBtnReviewOff} alt="btn" />
        </div>
        <div className='btnList'>
          <img src={srcBtnListOff} alt="btn" />
        </div>
        <div className='btnMyPage'>
          <img src={srcBtnMypageOff} alt="btn" />
        </div>
    </nav>
  )
}
