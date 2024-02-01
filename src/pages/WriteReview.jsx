import React from 'react'
import Header from "../components/WriteReview/Header";
import SearchStore from '../components/WriteReview/SearchStore';
import StarRating from '../components/WriteReview/StarRating';
import SelectBenefit from '../components/WriteReview/SelectGood';
import WriteTxt from '../components/WriteReview/WriteTxt';

export default function WriteReview() {
  return (
    <div className='container-writeReview'>
        <Header />
        <SearchStore />
        <StarRating />
        <SelectBenefit />
        <WriteTxt />
    </div>
  )
}
