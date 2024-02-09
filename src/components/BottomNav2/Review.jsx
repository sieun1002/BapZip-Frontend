import React, { useState } from 'react'
import srcBtnLikeOff from '../../images/BottomNav2/likeBtn.png'
import srcBtnLikeOn from '../../images/BottomNav2/likeBtnActive.png'
import srcBackGround from '../../images/BottomNav2/reviewPicBack.png'

export default function Review(item) {
  const date = item.reviewCreateDate.substr(0, 10).split('-');
  const formattedDate = `${date[0]}.${date[1]}.${date[2]}`;

  const [likeState,setLike] = useState(item.like);
  const [howManyLike,sethowManyLike] = useState(21);
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
    <div className='container-review' style={{position: 'relative', backgroundImage: `url(${item.imageUrl})`, backgroundSize: "cover"}} >
      <div style={{position: 'absolute', backgroundImage: `url(${srcBackGround})`, backgroundSize: "cover", width:'420px', height: '180px'}} />
      <div className='contents-review' style={{position: 'absolute'}}>
        <p className='name-review'>{item.storeName}</p>
        <div className='topReview-review'>
          <p className='txt-review'>"{item.reviewText}"</p>
          <p className='userDetail-review'>{item.nickname}({formattedDate})</p>
        </div>
      </div>
      <div className='likes-review' style={{position: 'absolute', left: '375px'}}>
        {likeState?
        <img src={srcBtnLikeOn} alt="like" onClick={()=>clickLike()} />:
        <img src={srcBtnLikeOff} alt="like" onClick={()=>clickLike()}/>}
        <p className='likeTxt-review' style={likeState?{color:"red"}:{color:"white"}}>{howManyLike}</p>
      </div>
    </div>
  )
}
