import React, { useState } from 'react'
import Header from '../components/ManageReview/Header'
import SelectBar from '../components/ManageReview/SelectBar'
import MyReview from '../components/ManageReview/MyReview'
import ZipReview from '../components/ManageReview/ZipReview'

export default function ManageReview() {
  const [options,setOptions]=useState([true,false]);
  return (
    <div className='manageReview-BottomNav4'>
        <Header />
        <SelectBar options={options} setOptions={setOptions}/>
        {options[0]?<MyReview />:<ZipReview />}
    </div>
  )
}
