import React, { useEffect, useState } from "react";
import api from "../../api/LoginTokenApi";
import scrRatingIcon from "../../images/WriteReview/ratingIcon.png";
import scrDeletBtn from "../../images/ManageReview/deletBtn.png";
import scrDetailBtn from "../../images/ManageReview/detailBtn.png";
import srcSelBtn from "../../images/ManageReview/selectBtn.png";
import srcSelActBtn from "../../images/ManageReview/selectActiveBtn.png";
import { Link } from "react-router-dom";

export default function MyReview() {
  const [detailBtn, setDetail] = useState([]);
  const [deleteID, setDel] = useState([]);

  const [selecState, setSelState] = useState(false);
  const [selectBtn, setSelBtn] = useState([]);

  const [viewModal, setModal] = useState(false);

  const [reviewData, setData] = useState([]);

  const [needR,setRender] = useState(true);
  const urlget = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/reviews/myReviews`;
  function getReview() {
    api.get(urlget)
    .then(function (response) {
      setData(response.data.result);
    })
    .catch(function (error) {
      console.log(error.message);
    });
  }
  function delReview() {
    for (let i = 0; i < deleteID.length; i++) {
      const urlDel = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/reviews/delete/${deleteID[i]}`;
      api.delete(urlDel)
      .catch(function(error){
        console.log(error.message);
      });
    }
    setRender(!needR);
  }
  //detailBtn
  function clickDetail(id) {
    let array = Array.from(detailBtn);
    if (array.indexOf(id) !== -1) {
      setDetail(array.filter((x) => x !== id));
    } else {
      setDetail(array.concat(id));
    }
  }
  function checkDetail(id) {
    let array = Array.from(detailBtn);
    for (let i = 0; i < array.length; i++) {
      if (id == array[i]) {
        return true;
      }
    }
    return false;
  }
  //selectBtn
  function clickSelect(id) {
    let arraySel = Array.from(selectBtn);
    if (arraySel.indexOf(id) !== -1) {
      setSelBtn(arraySel.filter((x) => x !== id));
    } else {
      setSelBtn(arraySel.concat(id));
    }
  }
  function checkSelect(id) {
    let arraySel = Array.from(selectBtn);
    for (let i = 0; i < arraySel.length; i++) {
      if (id == arraySel[i]) {
        return true;
      }
    }
    return false;
  }
  if (!reviewData[0]) {
    getReview();
  }
  useEffect(()=>{
    setTimeout(() => {
      getReview();
    }, 500);
  },[needR]);
  return (
    <div className="myReview-ManageReview">
      <div className="deleteBar-myReview">
        <p
          className="textSelec-deleteBar"
          onClick={() => {
            setSelState(!selecState);
            setSelBtn([]);
          }}
        >
          {selecState ? "취소" : "선택"}
        </p>
        <p
          className="textDel-deleteBar"
          style={{ color: "#767676", textDecoration: "underline" }}
          onClick={() => {
            setDel(selectBtn);
            if (selectBtn.length !== 0) setModal(true);
          }}
        >
          삭제하기
        </p>
      </div>
      <div className="reviews-MyReview">
        {reviewData.length ? (
          <div className="result-MyReview">
            {reviewData.map((item) => {
              return (
                <div className="container-MyReview" key={item.reviewId}>
                  {/* 기본정보 */}
                  <div
                    className="basicInfo-MyReview"
                    style={{ position: "relative" }}
                  >
                    <img
                      className="selectBtn-MyReview"
                      src={
                        checkSelect(item.reviewId) ? srcSelActBtn : srcSelBtn
                      }
                      alt=""
                      onClick={() => {
                        clickSelect(item.reviewId);
                      }}
                      style={
                        selecState ? { display: "block" } : { display: "none" }
                      }
                    />
                    <Link to={`/RestaurantInfo/${item.storeId}`}
                    state={{ navBar: "review" , restaurantPreLink: "/MyPage/ManageReivew" }}
                    style={{ textDecoration: "none" , color:"black"}}>
                      <img
                        src={item.imageUrls[0]}
                        alt=""
                        style={{
                          width: "128px",
                          height: "129px",
                          borderRadius: "10px 0px 00px 10px",
                          backgroundColor: "#D9D9D9",
                        }}
                      />
                    </Link>
                    <Link to={`/RestaurantInfo/${item.storeId}`}
                      state={{ navBar: "review" , restaurantPreLink: "/MyPage/ManageReivew" }}
                      style={{ textDecoration: "none" , color:"black"}}>
                      <div className="detailReview-MyReview">
                        <p className="date-MyReview">{item.visitDate} 방문</p>
                        <p className="name-MyReview">{item.storeName}</p>
                        <div className="rating-MyReview">
                          <img
                            src={scrRatingIcon}
                            alt=""
                            style={{ width: "17px", height: "16px" }}
                          />
                          <p className="rating-rating">{item.rating}.0</p>
                        </div>
                      </div>
                    </Link>
                    <div className="btn-MyReview">
                      <img
                        src={scrDeletBtn}
                        alt=""
                        style={{ width: "31px", height: "31px" }}
                        onClick={() => {
                          setDel([item.reviewId]);
                          setModal(true);
                        }}
                      />
                      <div
                        className="sectionDetail-Btn"
                        style={{ width: "31px", height: "31px" }}
                        onClick={() => {
                          clickDetail(item.reviewId);
                        }}
                      >
                        <img
                          src={scrDetailBtn}
                          alt=""
                          style={{ width: "16px", height: "7px" }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* 상세정보 */}
                  <div
                    className="moreInfo-MyReview"
                    style={
                      checkDetail(item.reviewId)
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <div className="user-moreInfo">
                      <img
                        src={item.userImage}
                        alt=""
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "100%",
                        }}
                      />
                      <p className="name-moreInfo">{item.nickname}</p>
                    </div>
                    <div className="rating-moreInfo">
                      <img
                        src={scrRatingIcon}
                        alt=""
                        style={{ width: "23px", height: "22px" }}
                      />
                      <p className="rating-rating">{item.rating}.0</p>
                    </div>
                    <p className="text-moreInfo">{item.reviewText}</p>
                    <div className="images-moreInfo">
                      {item.imageUrls[0] ? item.imageUrls.map((image)=>{
                        return(
                          <img
                            key={item.imageUrls.indexOf(image)}
                            src={image}
                            alt=""
                            style={{ width: "140px", height: "140px" }}
                          />
                        )
                      }) : ("")}
                    </div>
                    <p className="date-moreInfo">{item.visitDate}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
      {/* 모달 */}
      <div
        className="modalDel-MyReview"
        style={viewModal ? { display: "flex" } : { display: "none" }}
      >
        <div className="container-modalDel">
          <p className="title-modalDel">
            선택한 나의 리뷰를 정말로 삭제하시겠어요?
          </p>
          <div className="btn-modalDel">
            <button
              className="cancel-modalDel"
              onClick={() => {
                setModal(false);
              }}
            >
              취소
            </button>
            <button
              className="confirm-modalDel"
              style={{ color: "red" }}
              onClick={() => {
                delReview();
                setModal(false);
              }}
            >
              삭제하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
