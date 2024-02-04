import React from 'react'
import Header from '../components/Setting/Header'
import UserInfo from '../components/Setting/UserInfo'
import SetAlert from '../components/Setting/SetAlert'
import SetPoint from '../components/Setting/SetPoint'
import Notice from '../components/Setting/Notice'

export default function Setting() {
  return (
    <div className='setting-BottomNav4'>
        <Header />
        <UserInfo />
        <SetAlert />
        <SetPoint />
        <Notice />
    </div>
  )
}
