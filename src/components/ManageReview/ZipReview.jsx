import React, { useState } from 'react'
import api from "../../api/LoginTokenApi";
import srcGoBtn from '../../images/Setting/goBtn.png'
import scrRatingIcon from '../../images/WriteReview/ratingIcon.png'
import { Link } from 'react-router-dom';

export default function ZipReview() {
  const [reviewData,setData] = useState([]);

  const urlget = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/reviews/myZipReviews`;
  function getReview(){
    api.get(urlget)
    .then(function(response){
      setData(response.data.result);
    })
    .catch(function(error){
      console.log(error.message);
    });
  }

  if(!reviewData[0]){
    getReview();
  }
  else{

  }
  return (
    <div className='reviews-ZipReview'>
      {reviewData.length?
      <div className='result-ZipReview'>
        {reviewData.map((item)=>{
          const date = item.createdAt.substr(0, 10).split('-');
          const formattedDate = `${date[0]}.${date[1]}.${date[2]}`;
          return(
            <div className='container-ZipReview' key={item.reviewId}>
              <Link to={`/RestaurantInfo/${item.storeId}`} style={{ textDecoration: "none" , color:"black"}}>
                <div className='storeName-ZipReview'>
                  <p>{item.storeName}</p>
                  <img src={srcGoBtn} alt="" style={{width:'7px', height:'16px'}}/>
                </div>
              </Link>
              <div className='detail-ZipReview'>
                <div className='user-detail'>
                  <img src={item.userImage} alt="" style={{width:'30px', height:'30px', borderRadius:'100%'}}/>
                  <p className='name-detail'>{item.nickname}</p>
                </div>
                <div className='rating-detail'>
                  <img src={scrRatingIcon} alt="" style={{width:'23px', height:'22px'}}/>
                  <p className='rating-detail'>{item.rating}.0</p>
                </div>
                <p className='text-detail'>{item.reviewText}</p>
                {item.imageUrls[0]? <img src={item.imageUrls[0]} alt="" style={{width:'140px', height:'140px'}}/> : ""}
                <p className='date-detail'>{formattedDate}</p> 
              </div>
            </div>
            )
          })}
      </div>:""}
    </div>
  )
}
