import React from 'react'
import srcImg from '../../images/BottomNav2/logo.png'

export default function ReviewRanking() {
  return (
    <div className='container-reviewRanking'>
        <div className='title-reviewRanking'>
            <p>주간 리뷰 랭킹 TOP 3</p>
        </div>
        <div className='contents-reviewRanking'>
            <div className='section-rank'>
                <div className='detail-rank'>
                    <img src={srcImg} alt="imgsecond" className='img-ranking'/>
                    <p className='name'>김이등</p>
                    <p className='likes'>좋아요 20개</p>
                </div>
                <p className='rankSecond'>2</p>
            </div>
            <div className='section-rankFirst'>
                <div className='detail-firstRank'>
                    <img src={srcImg} alt="imgfirst" className='img-ranking'/>
                    <p className='name'>김일등</p>
                    <p className='likes'>좋아요 29개</p>
                </div>
                <p className='rankfirst'>1</p>
            </div>
            <div className='section-rank'>
                <div className='detail-rank'>
                    <img src={srcImg} alt="imgthird" className='img-ranking'/>
                    <p className='name'>김삼등</p>
                    <p className='likes'>좋아요 14개</p>
                </div>
                <p className='rankThird'>3</p>
            </div>
        </div>
    </div>
  )
}
