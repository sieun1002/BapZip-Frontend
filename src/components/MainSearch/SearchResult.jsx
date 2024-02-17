import React, { useEffect, useState } from 'react'
import api from "../../api/LoginTokenApi";
import { Link } from 'react-router-dom';
import scrUnknownIcon from "../../images/WriteReview/unknownIcon.png";

export default function SearchResult(props) {
  const [storeData, setData] = useState([]); 
  function getStore(){
    const urlget = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/search?name=${props.text}`;
    api.get(urlget)
    .then(function(response){
      setData(response.data.result);
    })
    .catch(function(error){
      console.log(error.message);
    });
  }
  useEffect(() => {
    getStore();
  }, [props.text]);
  const keywords = ["카페", "케이크", "마라탕", "피자", "짜장면", "탕후루"];
  return (
    <div className='searchResult-MainSearch'>
        {props.text?
        (
            <div className='afterSearch-MainSearch'>
                {storeData.length?
                <div className='result-afterSearch'>
                    {storeData.map((item)=>{
                        props.setLen(false);
                        return(
                            <Link to={`/RestaurantInfo/${item.id}`} key={item.id}
                            state={{ navBar: "home" , restaurantPreLink: "/Home" }}
                            style={{ textDecoration: "none", color:'black'}}>
                                <div className='storeName-afterSearch'>
                                    <p>{item.storeName}</p>
                                </div>
                            </Link>    
                        )
                    })}
                </div>
                :
                <div className='unKnownStore-afterSearch'>
                    {props.setLen(true)}
                    <img
                        src={scrUnknownIcon}
                        alt="아이콘"
                        style={{ width: "90px", height: "90px" }}
                    />
                    <div className="info-unknownStore">
                        <p style={{ color: "#FFBA35" }}>`{props.text}` </p>
                        <p style={{ color: "#767676" }}>에 대한 결과가 없습니다.</p>
                    </div>
                    <p className="txt-unknownStore">비슷한 다른 검색어를 입력해보세요.</p>
                </div>
                }
            </div>
        ):
        (
            <div className='beforeSearch-MainSearch'>
                {props.setLen(true)}
                <p className='text-beforeSearch'>추천 검색어</p>
                <div className='recommendSearch-beforeSearch'>
                    <button className='keyword-recommendSearch' onClick={()=>props.setTxt(keywords[0])}>{keywords[0]}</button>
                    <button className='keyword-recommendSearch' onClick={()=>props.setTxt(keywords[1])}>{keywords[1]}</button>
                    <button className='keyword-recommendSearch' onClick={()=>props.setTxt(keywords[2])}>{keywords[2]}</button>
                    <button className='keyword-recommendSearch' onClick={()=>props.setTxt(keywords[3])}>{keywords[3]}</button>
                    <button className='keyword-recommendSearch' onClick={()=>props.setTxt(keywords[4])}>{keywords[4]}</button>
                    <button className='keyword-recommendSearch' onClick={()=>props.setTxt(keywords[5])}>{keywords[5]}</button>

                </div>
            </div>
        )}
    </div>
  )
}
