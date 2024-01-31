import React, { useState } from 'react'
import srcEmptyStar from '../../images/WriteReview/emptyStarBtn.png'
import srcFullStar from '../../images/WriteReview/fullStarBtn.png'

export default function StarRating() {
  const [stars, setStar] = useState([false,false,false,false,false]);
  const [index_s, setIndex] = useState(0);

  function clickStar(index){
    let stars_f = [false,false,false,false,false];
    setIndex(index + 1);
    for (let i = 0; i <= index; i++) {
      stars_f[i] = true;
    }
    setStar(stars_f);
  }
  return (
    <div className='starRating-WriteReview'>
        <div className='txt-starRating'>
            <p className='title-starRating'>식당 만족도 별점</p>
            <p style={{color:'red'}}>*</p>
        </div>
        <div className='stars-starRating'>
          <img src={stars[0] ? srcFullStar : srcEmptyStar} alt="별" onClick={()=>clickStar(0)}/>
          <img src={stars[1] ? srcFullStar : srcEmptyStar} alt="별" onClick={()=>clickStar(1)}/>
          <img src={stars[2] ? srcFullStar : srcEmptyStar} alt="별" onClick={()=>clickStar(2)}/>
          <img src={stars[3] ? srcFullStar : srcEmptyStar} alt="별" onClick={()=>clickStar(3)}/>
          <img src={stars[4] ? srcFullStar : srcEmptyStar} alt="별" onClick={()=>clickStar(4)}/>
          <p>{index_s} / 5</p>
        </div>    
    </div>
  )
}
