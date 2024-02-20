import React from 'react'
import Searchimage from "../../images/Silsiganin/Searchimage.png";

export default function SearchStore(props) {
    return (
    <div className='SearchStore-BottomNav3'>
        <div className='search-SearchStore'>
            <img src={Searchimage} alt="찾기 아이콘" style={{width:'28px', height:'28px'}}/>
            <input className='input-SearchStore' type="text" placeholder='교내에서 내가 가고 싶은 식당은?'
            maxLength='15' onChange={(e)=>props.setInput(e.target.value)}/>
        </div> 
    </div>
  )
}
