import React, { useState } from 'react'
import api from "../../api/LoginTokenApi";

export default function MyZipStore() {
  const [zipData,setData] = useState([]);
  const urlget = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/myZip`;
  
  function getZip(){
    api.get(urlget)
    .then(function(response){
      setData(response.data.result);
    })
    .catch(function(error){
      console.log(error.message);
    })
  }
  
  if(!zipData[0]){
    getZip();
  }
  return (
    <div className='MyZipStore-BottomNav4'>
      <div className='text-MyZipStore'>
        <p className='title-MyZipStore'>내가 찜한 식당</p>
        <p className='viewAll-MyZipStore'>전체보기</p>
      </div>
      <div className='Stores-MyZipStore'>
        {zipData.length?<div className='result-SearchModal'>
            {zipData.map((item)=>{
              return(
                <div className='store-Stores'  key={item.id}>
                  <img src={item.imageUrl} alt="사진" className='image-MyZipStore'/>
                  <p className='name-MyZipSore'>{item.name}</p>
                </div>
              )
            })}
        </div>:""}
      </div>
      
    </div>
  )
}
