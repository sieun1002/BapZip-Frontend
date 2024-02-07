import React, { useState } from 'react'

export default function WriteTxt() {
    const [textValue, setTextValue] = useState("");
    const handleSetValue = (e) => {
      setTextValue(e.target.value);
    }
    return (
        <div className='writeTxt-WriteReview'>
            <div className='txt-writeTxt'>
                <p className='title-writeTxt'>리뷰작성</p>
                <p style={{color:'red'}}>*</p>
            </div>
            <div className='txtArea-writeTxt'>
                <textarea className='txtBox-writeTxt' placeholder='리뷰를 작성하면 10 포인트를 적립해드립니다!&#13;*100자 이상'
                value={textValue} onChange={(e)=>{handleSetValue(e)}}>
                </textarea>
            </div>
        </div>
    )
}
