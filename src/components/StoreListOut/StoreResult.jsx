import React, { useEffect, useState } from 'react'
import api from "../../api/LoginTokenApi";
import scrMenuDetail from "../../images/StoreListIn/menudetail.png"
import scrRatingIcon from "../../images/WriteReview/ratingIcon.png";
import scrBookmarkBtn from "../../images/StoreListIn/bookmarkBtn.png"
import scrEmBookmarkBtn from "../../images/StoreListIn/embookmarkBtn.png"
import scrUnknownIcon from "../../images/WriteReview/unknownIcon.png";

import { Link } from 'react-router-dom';

export default function StoreResult(props) {
  const [menuBar,setMenuBar] = useState(false);
  const menuList = ["추천순", "별점순", "리뷰많은순"];
  const menuListApi = ["score", "score", "reviewcount"];
  const [menu,setMenu] = useState(0);
  const [needR,setRender] = useState(true);

  function clickBookmark(id, isBook) {
    if(isBook){
      const urlDel = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/deleteZip?storeId=${id}`
      api.delete(urlDel)
      .catch(function(error){
        console.log(error.message);
      });
    }
    else{
      const urlPost = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/zip?storeId=${id}`
      api.post(urlPost)
      .catch(function(error){
        console.log(error.message);
      });
    }
    setRender(!needR);
  }
  const storedUserId = localStorage.getItem("schoolId"); 
  const [storeData,setData] = useState([]);
  const urlget = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/list/${menuListApi[menu]}?schoolId=${storedUserId}`;
  function getStore(){
    api.get(urlget)
    .then(function(response){
      setData(response.data.result.filter((item)=>item.inOut==="OUT" && item.name.includes(props.input)));
    })
    .catch(function(error){
      console.log(error.message);
    });
  }

  function clickMenu(index){
    setMenu(index);
    setMenuBar(false);
  }
  useEffect(()=>{
    getStore();
  },[props.input]);
  useEffect(()=>{
    setTimeout(() => {
      getStore();
    }, 100);
  },[menu,needR]);
  

  return (
    <div className='StoreResult-StoreListIn'>
      <div className='content-StoreResult'>
        <p className='text-StoreResult'>{storeData.length}개의 매장</p>
        <div className='menubar-StoreResult'>
          <div className='menuBtn-StoreResult' onClick={()=>{setMenuBar(!menuBar)}}>
            <p>{menuList[menu]} </p>
            <img src={scrMenuDetail} alt="" style={{width:'10px', height:'5px'}}/>
          </div>
          <div className='menuList-StoreResult' style={menuBar?{display:'block'}:{display:'none'}}>
            <p className='menu-menuList' style={menu===0?{color:"black", fontWeight:'600'}:{}}
             onClick={()=>{clickMenu(0)}}>추천순</p>
            <p className='menu-menuList'style={menu===1?{color:"black", fontWeight:'600'}:{}}
             onClick={()=>{clickMenu(1)}}>별점순</p>
            <p className='menu-menuList'style={menu===2?{color:"black", fontWeight:'600'}:{}}
             onClick={()=>{clickMenu(2)}}>리뷰많은순</p>
          </div>
        </div>
      </div>
      {storeData.length?
      <div className='result-availableC'>
        {storeData.map((item)=>{
          return(
            <div className="container-MyReview" key={item.storeId}>
              <div className="basicInfo-MyReview" style={{ position: "relative" }}>
                <Link to={`/RestaurantInfo/${item.storeId}`} 
                state={{ navBar: "home" , restaurantPreLink: "/ListIn" }}
                style={{ textDecoration: "none", color:'black'}}>
                  <img src={item.imageUrl} alt=""
                    style={{
                      width: "128px",
                      height: "129px",
                      borderRadius: "10px 0px 00px 10px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                </Link>
                <Link to={`/RestaurantInfo/${item.storeId}`} 
                state={{ navBar: "home" , restaurantPreLink: "/ListIn" }}
                style={{ textDecoration: "none", color:'black'}}>
                  <div className="detailReview-MyReview">
                    <p className="name-StoreResult">{item.name}</p>
                    <p className="date-StoreResult">{item.category}ㆍ{item.inOut==="IN"? "교내" : "교외"}</p>
                    <div className="rating-MyReview">
                      <img src={scrRatingIcon} alt="" style={{ width: "17px", height: "16px" }}
                      />
                      <p className="rating-rating">{item.score}</p>
                      <p className='reviewCount-rating'>({item.reviewCount})</p>
                    </div>
                  </div>
                </Link>
                <div className="btn-MyReview">
                  <img src={item.isMyZip?scrBookmarkBtn:scrEmBookmarkBtn} alt="" style={{ width: "31px", height: "31px" }}
                    onClick={() => {clickBookmark(item.storeId, item.isMyZip)}}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>:
      <div className="unknownStore-SearchModal">
        <img
          src={scrUnknownIcon}
          alt="아이콘"
          style={{ width: "90px", height: "90px" }}
        />
        <div className="info-unknownStore" style={{justifyContent:'center'}}>
          <p style={{ color: "#FFBA35" }}>`{props.input}` </p>
          <p style={{ color: "#767676" }}>에 대한 결과가 없습니다.</p>
        </div>
        <p className="txt-unknownStore">비슷한 다른 검색어를 입력해보세요.</p>
      </div>
    }
    </div>
  )
}
