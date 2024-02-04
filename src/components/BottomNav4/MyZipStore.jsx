import React from 'react'
import srcFirstZip from '../../images/BottomNav4/firstZip.png'
import srcSecondZip from '../../images/BottomNav4/secondZip.png'
import srcThirdZip from '../../images/BottomNav4/thirdZip.png'

export default function MyZipStore() {
  return (
    <div className='MyZipStore-BottomNav4'>
      <div className='text-MyZipStore'>
        <p className='title-MyZipStore'>내가 찜한 식당</p>
        <p className='viewAll-MyZipStore'>전체보기</p>
      </div>
      <div className='Stores-MyZipStore'>
        <div className='firstStore-Stores'>
          <img src={srcFirstZip} alt="사진" className='image-MyZipStore'/>
          <p className='name-MyZipSore'>한식당-한식</p>
        </div>
        <div className='secondStore-Stores'>
          <img src={srcSecondZip} alt="사진" className='image-MyZipStore'/>
          <p className='name-MyZipSore'>연어식당</p>
        </div>
        <div className='thirdStore-Stores'>
          <img src={srcThirdZip} alt="사진" className='image-MyZipStore'/>
          <p className='name-MyZipSore'>블랑카페</p>
        </div>
      </div>
      
    </div>
  )
}
