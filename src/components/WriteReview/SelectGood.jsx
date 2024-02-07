import React, { useState } from 'react'

export default function SelectGood() {
  const [stateBtn, setBtn] = useState([false, false, false, false, false, false, false, false, false, false]);
  
  function clickBtn(index){
    const stateBtn_f = Array.from(stateBtn);
    stateBtn_f[index] = !(stateBtn[index]);
    let cnt = 0;
    for(let i = 0; i<stateBtn.length; i++){
      if(stateBtn_f[i]){
        cnt++;
      }
    }
    if(cnt <= 3){
      setBtn(stateBtn_f);
    }
  }

  return (
    <div className='selectBenefit-WriteReview'>
        <div className='txt-selectBenefit'>
            <p className='title-selectBenefit'>식당의 좋은 점을 선택해주세요(최대 3개)</p>
            <p style={{color:'red'}}>*</p>
        </div>
        <div className='container-selectBenefit'>
          <button onClick={()=>{clickBtn(0)}} className={stateBtn[0] ? 'btnActive-selectBenefit': 'btn-selectBenefit'}>혼밥</button>
          <button onClick={()=>{clickBtn(1)}} className={stateBtn[1] ? 'btnActive-selectBenefit': 'btn-selectBenefit'}>양많음</button>
          <button onClick={()=>{clickBtn(2)}} className={stateBtn[2] ? 'btnActive-selectBenefit': 'btn-selectBenefit'}>빠름</button>
          <button onClick={()=>{clickBtn(3)}} className={stateBtn[3] ? 'btnActive-selectBenefit': 'btn-selectBenefit'}>저렴함</button>
          <button onClick={()=>{clickBtn(4)}} className={stateBtn[4] ? 'btnActive-selectBenefit': 'btn-selectBenefit'}>깨끗함</button>
          <button onClick={()=>{clickBtn(5)}} className={stateBtn[5] ? 'btnActive-selectBenefit': 'btn-selectBenefit'}>단체석</button>
          <button onClick={()=>{clickBtn(6)}} className={stateBtn[6] ? 'btnActive-selectBenefit': 'btn-selectBenefit'}>맛있음</button>
          <button onClick={()=>{clickBtn(7)}} className={stateBtn[7] ? 'btnActive-selectBenefit': 'btn-selectBenefit'}>친절함</button>
          <button onClick={()=>{clickBtn(8)}} className={stateBtn[8] ? 'btnActive-selectBenefit': 'btn-selectBenefit'}>넓음</button>
          <button onClick={()=>{clickBtn(9)}} className={stateBtn[9] ? 'btnActive-selectBenefit': 'btn-selectBenefit'}>조용함</button>
        </div>
    </div>
  )
}
