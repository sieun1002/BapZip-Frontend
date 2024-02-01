import React from 'react'
import Header from "../components/WriteReview/Header";
import SearchStore from '../components/WriteReview/SearchStore';
import StarRating from '../components/WriteReview/StarRating';
import SelectBenefit from '../components/WriteReview/selectBenefit';

export default function WriteReview() {
  return (
    <div className='container-writeReview'>
        <Header />
        <SearchStore />
        <StarRating />
        <SelectBenefit />
    </div>
  )
}
