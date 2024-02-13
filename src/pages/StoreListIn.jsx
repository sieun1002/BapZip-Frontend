import React from 'react'
import Header from '../components/StoreListIn/Header'
import SearchStore from '../components/StoreListIn/SearchStore'
import StoreResult from '../components/StoreListIn/StoreResult'

export default function StoreListIn() {
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
