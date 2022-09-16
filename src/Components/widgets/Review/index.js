import React from 'react'
import Rating  from '@mui/material/Rating'
import like from '../../../Assets/like.svg'
import dislike from '../../../Assets/dislike.svg'
function Review(props) {
    const { review } = props
  return (
    <div className='flex flex-row mt-7 flex-wrap'>
        <div className='h-16 w-16 bg-black border rounded-full flex justify-center items-center'>
            <p className='text-2xl font-bold text-white-2'>{review.name[0]}</p>

        </div>
        <div className='flex flex-col ml-5' style={{width:"35rem"}}>
            <p className='text-lg font-bold'>{review.name}</p>
            <Rating name="read-only" value={parseFloat(review.rate)} precision={0.10} size='small' readOnly />
            <p className=' mt-3'>{review.content}</p>
            <p className='text-gray-400 text-sm mt-3'>Did you find this helpful?</p>
            <div className='flex flex-row mt-2'>
                <div className='flex flex-row items-center'>
                  <div className='h-10 w-10 bg-white-2 border border-black rounded-full items-center justify-center flex hover:bg-gray-100 hover:cursor-pointer'>
                    <img src={like} alt='like' />
                  </div>
                </div>
                <div className='flex flex-row ml-5'>
                  <div className='h-10 w-10 bg-white-2 border border-black rounded-full items-center justify-center flex hover:bg-gray-100 hover:cursor-pointer'>
                    <img src={dislike} alt='dislike' />
                  </div>
                </div>
                
            </div>
            
        </div>
        <div className='border-b border-gray-300 mt-3 w-full'></div>     
    </div>
  )
}

export default Review