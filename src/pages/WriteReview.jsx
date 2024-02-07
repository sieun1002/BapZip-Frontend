import React, { useEffect, useState } from "react";
import Header from "../components/WriteReview/Header";
import SearchStore from "../components/WriteReview/SearchStore";
import StarRating from "../components/WriteReview/StarRating";
import SelectBenefit from "../components/WriteReview/SelectGood";
import WriteTxt from "../components/WriteReview/WriteTxt";
import UploadImg from "../components/WriteReview/UploadImg";
import ModalGetPoint10 from "../components/WriteReview/ModalGetPoint10";

export default function WriteReview() {
  const [reviewDetail, setReview] = useState({
    'storeName' : '',
    'rating' : 0,
    'hashtags' : ['','',''],
    'reviewText' : '',
    'imgScr' : ''
  });

  const [completeWrite, setComplete] = useState(true);
  const [modalState, setModal] = useState(false);
  // useEffect(()=>{
  //   if(checkComplete){
  //     setComplete(true);
  //   }
  //   else{
  //     setComplete(false);
  //   }
  // },[reviewDetail]);

  function checkComplete(){
    if(reviewDetail.storeName && (reviewDetail.rating!==0) && reviewDetail.hashtags && reviewDetail.reviewText)
    {
      return true;
    }
    else{ return false; }
  }

  function setStore(input) {
    setReview({
      ...reviewDetail,
      'storeName' : input
    });
  }
  function setRate(input) {
    setReview({
      ...reviewDetail,
      'rating' : input
    });
  }
  function setBenefit(input) {
    setReview({
      ...reviewDetail,
      'hashtags' : input
    });
  }
  function setTxt(input) {
    setReview({
      ...reviewDetail,
      'reviewText' : input
    });
  }
  function setImgScr(input) {
    setReview({
      ...reviewDetail,
      'imgScr' : input
    });
  }

  return (
    <div className='container-writeReview' style={{position:'relative'}}>
        <Header />
        <SearchStore />
        <StarRating />
        <SelectBenefit />
        <WriteTxt />
        <UploadImg />
        <ModalGetPoint10 viewModal={modalState}/>
        <div className='btn-writeReview'>
          <button className='submitBtn-writeReview' style={completeWrite? {backgroundColor:'#FFBA35'} : {backgroundColor:'#EDEDED'}}
          disabled={!completeWrite} onClick={()=>{setModal(true)}} type="submit">등록하기</button>
        </div>
    </div>
  );
}
