import React, { useState } from 'react'
import Header from '../components/StoreListIn/Header'
import SearchStore from '../components/StoreListIn/SearchStore'
import StoreResult from '../components/StoreListIn/StoreResult'

export default function StoreListIn() {
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
