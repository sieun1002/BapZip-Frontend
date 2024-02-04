import React from 'react'
import { Link } from 'react-router-dom'

import scrBackBtn from '../../images/BottomNav4/settingBtn.png'

export default function Header() {
  return (
    <div className='header-BottomNav4'>
        <p className='title-header'>마이페이지</p>
        <Link to="/Review">
            <img src={scrBackBtn} alt="설정" />
        </Link>
    </div>
  )
}