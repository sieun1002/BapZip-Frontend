import React from 'react'
import srcGoBtn from '../../images/Setting/goBtn.png'

export default function Notice() {
  return (
    <div className='container-Notice'>
        <div className='content-Setting'>
            <p className='text-Setting'>공지사항</p>
            <img src={srcGoBtn} alt="" style={{width:'7px', height:'16px'}}/>
        </div>
        <div className='content-Setting'>
            <p className='text-Setting'>이용약관 및 정책</p>
            <img src={srcGoBtn} alt="" style={{width:'7px', height:'16px'}}/>
        </div>
    </div>  )
}
