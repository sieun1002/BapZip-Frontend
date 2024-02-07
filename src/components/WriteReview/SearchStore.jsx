import React, { useState } from 'react'
import scrSearchBtn from '../../images/WriteReview/storeSearchBtn.png'
import scrSearchIcon from '../../images/WriteReview/searchIcon.png'
import scrUnknownIcon from '../../images/WriteReview/unknownIcon.png'
export default function SearchStore() {
  const [modalState,setModal] = useState(false);
  const [input,setInput] = useState("");
  return (
    <div className='searchStore-WriteReview'>
        <div className='beforeSearch-SearchStore'>
            <img src={scrSearchBtn} alt="검색 버튼" onClick={()=>setModal(true)}/>
        </div>
        <div className='searchModal-SearchStore' style={modalState?{display:'block'}:{display:'none'}}>
          <div className='txt-SearchModal'>
            <p className='title-SearchModal'>식당 선택</p>
            <div className='search-SearchModal'>
              <img src={scrSearchIcon} alt="찾기 아이콘" style={{width:'23px', height:'23px'}}/>
              <input className='input-SearchModal' type="text" placeholder='식당명을 입력하세요. 예) 도봉 한식'
              maxLength='15' onChange={(e)=>setInput(e.target.value)}/>
            </div>  
          </div>
          <div className='unknownStore-SearchModal' style={input.length?{display:'flex'}:{display:'none'}}>
            <img src={scrUnknownIcon} alt="아이콘" style={{width:'90px', height:'90px'}}/>
            <div className='info-unknownStore'>
              <p style={{color:'#FFBA35'}}>`{input}` </p>
              <p style={{color:'#767676'}}>에 대한 결과가 없습니다.</p>
            </div>
            <p className='txt-unknownStore'>비슷한 다른 검색어를 입력해보세요.</p>
          </div>
          <div className='btn-SearchModal'>
            <button className='closeBtn-SearchModal' onClick={()=>setModal(false)}>취소</button>
            <button type='submit' className='submitBtn-SearchModal' onClick={()=>setModal(false)}>확인</button>
          </div>
        </div>
    </div>
  )
}
