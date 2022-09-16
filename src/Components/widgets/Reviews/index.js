import React from 'react'
import Review from '../Review'
function Reviews(props) {
  return (
    <div>
        <p className='text-2xl font-bold mt-10'>Reviews</p>
        <div className='mt-5'>
            {props.reviews.map((review) =>
                <Review review={review} key={props.reviews.indexOf(review)} />
            )}
        </div>
    </div>
  )
}

export default Reviews