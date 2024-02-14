import React from 'react'
import Header from '../components/StoreListOut/Header'
import SearchStore from '../components/StoreListOut/SearchStore'
import StoreResult from '../components/StoreListOut/StoreResult'

export default function StoreListOut() {
  return (
    <div className='App'>
      <div className='BottomNav3-StoreListIn' style={{position:'relative'}}>
            <Header />
            <SearchStore />
            <StoreResult />
        </div>
    </div>
  )
}
