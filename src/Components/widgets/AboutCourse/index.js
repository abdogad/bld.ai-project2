import React from 'react'

function AboutCourse(props) {
  return (
    <div>
        <p className='text-2xl font-bold mt-10'>Description</p>
        <p className='mt-5 text-sm'>{props.description}</p>
    </div>
  )
}

export default AboutCourse