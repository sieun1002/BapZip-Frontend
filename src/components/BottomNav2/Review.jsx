import React, { useState } from 'react'
import srcBtnLikeOff from '../../images/BottomNav2/likeBtn.png'
import srcBtnLikeOn from '../../images/BottomNav2/likeBtnActive.png'

export default function Review(item) {
  const [likeState,setLike] = useState(false);
  const [howManyLike,sethowManyLike] = useState(item.likes);
  let value = howManyLike;
  function clickLike(){
    if(!likeState){
      sethowManyLike(++value);
      setLike(!likeState);
    }
    else{
      sethowManyLike(--value);
      setLike(!likeState); 
    }
  }
  return (
    <div className='container-review' style={{backgroundImage: `url(${item.picturePath})`, backgroundSize: "cover"}} >
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
        <p className='likeTxt-review' style={likeState?{color:"red"}:{color:"white"}}>{howManyLike}</p>
      </div>
    </div>
  )
}
