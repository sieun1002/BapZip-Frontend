import React from 'react'

export default function SelectBar(props) {
  function clickOption1(){
    props.setOptions([true,false]);
  }
  function clickOption2(){
    props.setOptions([false,true]);
  }
  return (
    <div className='selectBar-ManageReview'>
        <div className='option-selectBar' style={props.options[0]?{borderBottomColor:'#FFBA35'}:{borderBottomColor:'#D9D9D9'}}
        onClick={()=>clickOption1()}>
            <p className='text-option' style={props.options[0]?{color:'#FFBA35'}:{color:'#D9D9D9'}}>사용 가능 쿠폰</p>
        </div>
        <div className='option-selectBar' style={props.options[1]?{borderBottomColor:'#FFBA35'}:{borderBottomColor:'#D9D9D9'}}
        onClick={()=>clickOption2()}>
            <p className='text-option' style={props.options[1]?{color:'#FFBA35'}:{color:'#D9D9D9'}}>만료 쿠폰</p>
        </div>
    </div>
  )
}
