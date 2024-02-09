import React from 'react'
import Review from './Review'

export default function Reviews(props) {
  return (
    <div className='reviewList-timeline'>
        {
          props.reviews.map((item) => {
            return (
              <Review {...item} key={item.name}/>

            )
          })
        }
    </div>
  )
}
