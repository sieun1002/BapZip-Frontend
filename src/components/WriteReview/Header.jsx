import React from 'react'
import { Link } from 'react-router-dom'

import scrBackBtn from '../../images/WriteReview/backBtn.png'

export default function Header() {
  return (
    <div className='header-WriteReview'>
        <Link to="/Review">
            <img src={scrBackBtn} alt="뒤로가기" />
        </Link>
        <p className='title-header'>리뷰 작성</p>
    </div>
  )
}
