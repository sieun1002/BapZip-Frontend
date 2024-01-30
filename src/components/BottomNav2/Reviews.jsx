import React from 'react'
import Review from './Review'

export default function Reviews(reviews) {
  return (
    <div className='reviewList-timeline'>
        {
          reviews.result.map((item) => {
            return (
              <Review {...item} key={item.name}/>

            )
          })
        }
    </div>
  )
}
