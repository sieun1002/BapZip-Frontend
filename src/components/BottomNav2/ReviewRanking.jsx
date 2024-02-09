import React, { useState } from 'react'
import axios from 'axios'

export default function ReviewRanking() {
  const urlpost = 'http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/users/auth/signin';
  function getToken(){
    axios.post(urlpost,
      {
        "userId": "id1",
        "password": "1234"
      })
      .then(function(response){
        //getRancking
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.result.token}`;
        getRancking();
      })
      .catch(function(error){
        console.log(error.message);
      });
  }; 

  const [userData,setData] = useState({});
  function getRancking(){
    const urlget = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/reviews/ranking`;
    axios.get(urlget)
    .then(function(response){
      setData(response.data.result);
    })
    .catch(function(error){
      console.log(error.message);
    })
  };
  
  if(!userData[0]){
    getToken();
  }
  if(userData[0])
    return (
        <div className='container-reviewRanking'>
            <div className='title-reviewRanking'>
                <p>주간 리뷰 랭킹 TOP 3</p>
            </div>
            <div className='contents-reviewRanking'>
                <div className='section-rank'>
                    <div className='detail-rank'>
                        <img src={userData[1].imageUrl} alt="imgsecond" className='img-ranking'/>
                        <p className='name'>{userData[1].nickname}</p>
                        <p className='likes'>좋아요 {userData[1].likesCount}개</p>
                    </div>
                    <p className='rankSecond'>2</p>
                </div>
                <div className='section-rankFirst'>
                    <div className='detail-firstRank'>
                        <img src={userData[0].imageUrl} alt="imgfirst" className='img-ranking'/>
                        <p className='name'>{userData[0].nickname}</p>
                        <p className='likes'>좋아요 {userData[0].likesCount}개</p>
                    </div>
                    <p className='rankfirst'>1</p>
                </div>
                <div className='section-rank'>
                    <div className='detail-rank'>
                        <img src={userData[2].imageUrl} alt="imgthird" className='img-ranking'/>
                        <p className='name'>{userData[2].nickname}</p>
                        <p className='likes'>좋아요 {userData[2].likesCount}</p>
                    </div>
                    <p className='rankThird'>3</p>
                </div>
            </div>
        </div>
    )
}
