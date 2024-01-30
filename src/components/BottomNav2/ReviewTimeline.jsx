import React,{useState} from 'react'
import Reviews from './Reviews';
import { reviews } from '../../reviewdummy';

export default function ReviewTimeline() {
  const [clicked, setclick] = useState([true,false,false,false,false,false]);
  let index = 0;
  function clickBtn(x){
    const bools = [false,false,false,false,false,false];
    index = x;
    bools[index]=true;
    setclick(bools);
  }
  
  return (
    <div className='container-timeline'>
        <p className='title-timeline'>리뷰 타임라인</p>
        <div className='menuBtnSection-timeline'>
          <button onClick={()=>clickBtn(0)} className={clicked[0]?'btnActive-timeline':'btn-timeline'}>전체</button>
          <button onClick={()=>clickBtn(1)} className={clicked[1]?'btnActive-timeline':'btn-timeline'}>한식</button>
          <button onClick={()=>clickBtn(2)} className={clicked[2]?'btnActive-timeline':'btn-timeline'}>중식</button>
          <button onClick={()=>clickBtn(3)} className={clicked[3]?'btnActive-timeline':'btn-timeline'}>일식</button>
          <button onClick={()=>clickBtn(4)} className={clicked[4]?'btnActive-timeline':'btn-timeline'}>양식</button>
          <button onClick={()=>clickBtn(5)} className={clicked[5]?'btnActive-timeline':'btn-timeline'}>카페</button>
        </div>
        <Reviews {...reviews}/>
    </div>
  )
}
