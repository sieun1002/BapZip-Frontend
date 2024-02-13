import React from 'react'
import { Link } from 'react-router-dom'

import scrBackBtn from '../../images/WriteReview/backBtn.png'

export default function Header() {
  return (
    <div className='header-WriteReview'>
        <Link to="/List">
            <img src={scrBackBtn} alt="뒤로가기" />
        </Link>
        <p className='title-header'>교내 식당 IN</p>
    </div>
  )
}