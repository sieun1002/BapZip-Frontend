import React, { useCallback, useState } from 'react'
import axios from 'axios'

import scraddImgBtn from '../../images/BottomNav4/addImgBtn.png'

export default function Profile() {
  const [userData,setData] = useState({});
  const [stateAxios,setAxios] = useState(true);
  const urlgetPF = 'http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/myPage/info';
  const urlpost = 'http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/users/auth/signin';
  function getToken(){
    if(stateAxios){
      setAxios(false);
      axios.post(urlpost,
        {
          "userId": "id1",
          "password": "1234"
        })
        .then(function(response){
          //getProfile
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.result.token}`
          getProfile();
        })
        .catch(function(error){
          console.log('fail');
        });
    }
  }
  function getProfile(){
    if(stateAxios){
      axios.get(urlgetPF)
      .then(function(response){
        setData(response.data.result);
      })
      .catch(function(error){
        console.log(error.message);
      })
    }
  }
  
  getToken();
  const name = userData.nickname;
  const school = userData.schoolName;
  const major = userData.major;
  const imgurl = userData.imageUrl;
  return (
    <div className='profile-BottomNav4'>
        <div className='imageSection-profile'>
            <div className='img-profile' style={{backgroundImage:imgurl}}/>
            <img src={scraddImgBtn} alt="추가버튼" className='addImgBtn-profile' />
        </div>
        <div className='textSection-profile'>
            <p className='name-profile'>{name}님</p>
            <div className='edu-profile'>
                <p className='school-profile'>{school}</p>
                <p>|</p>
                <p className='major-profile'>{major}</p>
            </div>
        </div>
    </div>
  )
}
