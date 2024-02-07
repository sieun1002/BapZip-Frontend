import React, { useEffect, useState } from 'react'
import axios from 'axios'
import scrSearchBtn from '../../images/WriteReview/storeSearchBtn.png'
import scrSearchIcon from '../../images/WriteReview/searchIcon.png'
import scrUnknownIcon from '../../images/WriteReview/unknownIcon.png'
export default function SearchStore(props) {
  const [modalState,setModal] = useState(false);
  const [input,setInput] = useState("");
  const [storeId, setId] = useState();
  const urlpost = 'http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/users/auth/signin';
  function getToken(){
    axios.post(urlpost,
      {
        "userId": "id1",
        "password": "1234"
      })
      .then(function(response){
        //getProfile
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.result.token}`;
        getStore();
      })
      .catch(function(error){
        console.log('fail');
      });
  }; 

  const [storeData,setData] = useState({});
  function getStore(){
    const urlget = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/search?name=${input}`;
    axios.get(urlget,input)
    .then(function(response){
      setData(response.data.result);
    })
    .catch(function(error){
      console.log(error.message);
    })
  }

  useEffect(()=>{
    getToken();
    },[input]);
  
  function clickComfirm(){
    setModal(false);
    props.setStoreId(storeId);
  }  
  return (
    <div className='searchStore-WriteReview'>
        <div className='beforeSearch-SearchStore'>
            <img src={scrSearchBtn} alt="검색 버튼" onClick={()=>setModal(true)}/>
        </div>
        <div className='searchModal-SearchStore' style={modalState?{display:'block'}:{display:'none'}}>
          <div className='txt-SearchModal'>
            <p className='title-SearchModal'>식당 선택</p>
            <div className='search-SearchModal'>
              <img src={scrSearchIcon} alt="찾기 아이콘" style={{width:'23px', height:'23px'}}/>
              <input className='input-SearchModal' type="text" placeholder='식당명을 입력하세요. 예) 도봉 한식'
              maxLength='15' onKeyUp={(e)=>setInput(e.target.value)}/>
            </div>  
          </div>
          <div className='unknownStore-SearchModal' style={(input.length && !storeData.length)?{display:'flex'}:{display:'none'}}>
            <img src={scrUnknownIcon} alt="아이콘" style={{width:'90px', height:'90px'}}/>
            <div className='info-unknownStore'>
              <p style={{color:'#FFBA35'}}>`{input}` </p>
              <p style={{color:'#767676'}}>에 대한 결과가 없습니다.</p>
            </div>
            <p className='txt-unknownStore'>비슷한 다른 검색어를 입력해보세요.</p>
          </div>
          {storeData.length?<div className='result-SearchModal' style={(input.length)?{display:'block'}:{display:'none'}}>
            {storeData.map((item)=>{
              return(
                <div className='store-resultSearch' key={item.id} style={(storeId===item.id)?{backgroundColor:"#fff8ec"}:{}}
                onClick={()=>setId(item.id)}>
                    <p className='name-resultSearch'>{item.storeName}</p>
                    <p className='loc-resultSearch'>{item.position}</p>
                </div>
              )
            })}
          </div>:""}
          
          <div className='btn-SearchModal' >
            <button className='closeBtn-SearchModal' onClick={()=>setModal(false)}>취소</button>
            <button type='submit' className='submitBtn-SearchModal' onClick={()=>clickComfirm()}>확인</button>
          </div>
        </div>
    </div>
  )
}
