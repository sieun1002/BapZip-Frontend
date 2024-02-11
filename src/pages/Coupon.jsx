import React, { useState } from 'react'
import Header from '../components/Coupon/Header'
import SelectBar from '../components/Coupon/SelectBar'
import AvailableC from '../components/Coupon/AvailableC';
import ExpiredC from '../components/Coupon/ExpiredC';

export default function Coupon() {
  const [options,setOptions]=useState([true,false]);
  return (
    <div className='App'>
        <div className='coupon-BottomNav4'>
            <Header />
            <SelectBar options={options} setOptions={setOptions}/>
            {options[0]?<AvailableC />:<ExpiredC />}
        </div>
    </div>

  )
}
