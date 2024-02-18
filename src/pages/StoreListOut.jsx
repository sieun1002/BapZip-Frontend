import React, { useState } from 'react'
import Header from '../components/StoreListOut/Header'
import SearchStore from '../components/StoreListOut/SearchStore'
import StoreResult from '../components/StoreListOut/StoreResult'

export default function StoreListOut() {
  const [input,setInput] = useState("");
  return (
    <div className='App'>
      <div className='BottomNav3-StoreListIn' style={{position:'relative'}}>
            <Header />
            <SearchStore setInput={setInput}/>
            <StoreResult input={input}/>
        </div>
    </div>
  )
}
