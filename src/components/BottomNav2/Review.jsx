import React, { useState } from 'react'
import srcBtnLikeOff from '../../images/BottomNav2/likeBtn.png'
import srcBtnLikeOn from '../../images/BottomNav2/likeBtnActive.png'

export default function Review(item) {
  const [likeState,setLike] = useState(false);
  let howManylike = item.likes;
  function clickLike(){
    if(!likeState){
      howManylike = howManylike + 1;
      setLike(!likeState);
      console.log(howManylike);
    }
    else{
      setLike(!likeState); 
      console.log(howManylike);
    }
  }
  return (
    <div className='container-review' >
      <div className='contents-review'>
        <p className='name-review'>{item.name}</p>
        <div className='topReview-review'>
          <p className='txt-review'>"{item.topReviewTxt}"</p>
          <p className='userDetail-review'>{item.topReviewUser}({item.topReviewDate})</p>
        </div>
      </div>
      <div className='likes-review'>
        {likeState?
        <img src={srcBtnLikeOn} alt="like" onClick={()=>clickLike()} />:
        <img src={srcBtnLikeOff} alt="like" onClick={()=>clickLike()}/>}
        <p>{howManylike}</p>
      </div>
    </div>
  )
}
