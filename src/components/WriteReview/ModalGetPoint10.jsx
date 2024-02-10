import React from 'react'
import { Link } from "react-router-dom";

import scrGetPointIcon from '../../images/WriteReview/getPointIcon.png'

export default function ModalGetPoint10(props) {
  return (
    <div className='modalGetPoint10-WriteReview' style={props.viewModal?{display:'flex'}:{display:'none'}}>
        <div className='container-modalGetPoint10'>
            <p className='title-modalGetPoint10'>10 포인트 적립 완료</p>
            <img src={scrGetPointIcon} alt="아이콘" style={{width:'300px', height:'160px'}}/>
            <Link to="/Review">
                <button className='confirmBtn-modalGetPoint10'>확인</button>
            </Link>
        </div>
    </div>
  )
}
