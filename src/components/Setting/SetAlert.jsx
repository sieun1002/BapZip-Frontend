import React, { useState } from 'react'
import scrSetAlertBtn from '../../images/Setting/setAlertBtn.png'
import srcSetAlertActiveBtn from '../../images/Setting/setAlertActiveBtn.png'

export default function SetAlert() {
  const [button1,setBtn1] = useState(false);
  const [button2,setBtn2] = useState(false);

  return (
    <div className='container-Setting'>
        <p className='title-Setting'>알림</p>
        <div className='content-Setting'>
            <p className='text-Setting'>푸시 알림</p>
            <img src={button1?scrSetAlertBtn:srcSetAlertActiveBtn} alt="" style={{width:'45px', height:'24px'}}
             onClick={()=>{setBtn1(!button1)}}/>
        </div>
        <div className='content-Setting'>
            <p className='text-Setting'>이벤트 알림</p>
            <img src={button2?scrSetAlertBtn:srcSetAlertActiveBtn} alt="" style={{width:'45px', height:'24px'}}
             onClick={()=>{setBtn2(!button2)}}/>
        </div>
    </div>
  )
}
