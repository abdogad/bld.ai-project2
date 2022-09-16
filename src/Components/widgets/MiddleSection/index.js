import React from 'react'
import AlarmPhoto from '../../../Assets/alarm.jpg'

function MiddleSection() {
  return (
    <div className='relative -z-10 border xl:mx-16'>
      <img src={AlarmPhoto} alt='Alarm' className='w-full'/>
      <div className='bg-white-2 h-36 p-5 left-28 top-24 xl:absolute xl:shadow-md'>
        <h1 className='text-4xl mb-2'>New to Udemy? Lucky you.</h1>
        <p className='text-lg'>Courses start at E£169.99.<br></br> Get your new-student offer before it expires.</p>
        
      </div>
    </div>
  )
}

export default MiddleSection