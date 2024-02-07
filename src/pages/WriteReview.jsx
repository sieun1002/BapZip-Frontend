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
    'hashtags' : [],
    'reviewText' : '',
    'imgScr' : ''
  });
  const [storeId, setId] = useState(-1);

  const [completeWrite, setComplete] = useState(false);
  const [modalState, setModal] = useState(false);
  useEffect(()=>{
    if(checkComplete()){
      setComplete(true);
    }
    else{
      setComplete(false);
    }
    console.log(reviewDetail);
  },[reviewDetail]);

  function checkComplete(){
    if((reviewDetail.rating!==0) &&
     reviewDetail.hashtags.length!==0 && reviewDetail.reviewText.length >= 100)
    {
      return true;
    }
    else{
      return false; 
    }
  }

  function setStoreId(input){
    setId(input);
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
  const hashtagAll = ["혼밥", "양많음", "빠름", "저렴함", "깨끗함", "단체석", "맛있음", "친절함", "넓음", "조용함"];
  function setBenefit(input) {
    let hashtag = []; 
    for(let i=0; i<input.length; i++){
      if(input[i]){
        hashtag.push(hashtagAll[i]);
      }
    }
    setReview({
      ...reviewDetail,
      'hashtags' : hashtag
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
        <SearchStore setStoreId={setStoreId}/>
        <StarRating setRate={setRate}/>
        <SelectBenefit setBenefit={setBenefit}/>
        <WriteTxt setTxt={setTxt}/>
        <UploadImg setImgScr={setImgScr}/>
        <ModalGetPoint10 viewModal={modalState}/>
        <div className='btn-writeReview'>
          <button className='submitBtn-writeReview' style={completeWrite? {backgroundColor:'#FFBA35'} : {backgroundColor:'#EDEDED'}}
          disabled={!completeWrite} onClick={()=>{setModal(true)}} type="submit">등록하기</button>
        </div>
    </div>
  );
}
