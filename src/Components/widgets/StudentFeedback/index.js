import React from 'react'
import Rating from '@mui/material/Rating';
function StudentFeedback(props) {
  const toInt = (value) => {
    return parseInt(value);
  }

  return (
    <div className='mt-5'>
        <p className='text-2xl font-bold'>Student Feedback</p>
        
        <div className='flex flex-row mt-5'>
            <div>
                <p className='text-6xl text-center font-bold text-red-800'>{props.rating}</p>
                <Rating name="read-only" value={parseFloat(props.rating)} precision={0.10} size='small' readOnly />
            </div>
            <div className='flex flex-col ml-5'>
                
                <div className='flex flex-row justify-end md:justify-start'>
                  <div className='w-96 bg-gray-200 mt-1 h-fit hidden md:block'>
                    <div className='h-3 bg-gray-500' style={{width:toInt(props.feedback[0])/100.0*348}}>
                    </div>
                  </div>
                  <Rating value={5} readOnly></Rating>
                  <p className='text-red-800 font-bold ml-2'>{props.feedback[0]}%</p>
                </div>
                <div className='flex flex-row justify-end md:justify-start'>
                  <div className='w-96 bg-gray-200 mt-1 h-fit hidden md:block'>
                    <div className='h-3 bg-gray-500' style={{width:toInt(props.feedback[1])/100.0*348}}>
                    </div>
                  </div>
                  <Rating value={4} readOnly></Rating>
                  <p className='text-red-800 font-bold ml-2'>{props.feedback[1]}%</p>
                </div>
                <div className='flex flex-row justify-end md:justify-start'>
                  <div className='w-96 bg-gray-200 mt-1 h-fit hidden md:block'>
                    <div className='h-3 bg-gray-500' style={{width:toInt(props.feedback[2])/100.0*348}}>
                    </div>
                  </div>
                  <Rating value={3} readOnly></Rating>
                  <p className='text-red-800 font-bold ml-2'>{props.feedback[2]}%</p>
                </div>
                <div className='flex flex-row'>
                  <div className='w-96 bg-gray-200 mt-1 h-fit hidden md:block'>
                    <div className='h-3 bg-gray-500' style={{width:toInt(props.feedback[3])/100.0*384}}>
                    </div>
                  </div>
                  <Rating value={2} readOnly></Rating>
                  <p className='text-red-800 font-bold ml-2'>{props.feedback[3]}%</p>
                </div>
                <div className='flex flex-row'>
                  <div className='w-96 bg-gray-200 mt-1 h-fit hidden md:block'>
                    <div className='h-3 bg-gray-500' style={{width:toInt(props.feedback[4])/100.0*348}}>
                    </div>
                  </div>
                  <Rating value={1} readOnly></Rating>
                  <p className='text-red-800 font-bold ml-2'>{props.feedback[4]}%</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentFeedback