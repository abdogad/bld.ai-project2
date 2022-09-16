import React from 'react'
import play1 from '../../../Assets/play.svg'
function Video(props) {
  return (
    <div className='relative'>
        <img src={props.image} alt='course' className='w-full object-cover' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <img src={play1} alt='play' className='w-20 h-20'/>
        </div>
    </div>
  )
}

export default Video