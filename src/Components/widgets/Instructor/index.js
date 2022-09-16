import React from 'react'
import InstructorCard from '../InstructorCard'

function Instructor(props) {
  return (
    <div>
        <p className='text-2xl font-bold mt-10'>Instructor</p>
        <div className='mt-5'>
            {props.instructors.map((instructor) =>
                <InstructorCard instructor={instructor} key={props.instructors.indexOf(instructor)} />
            )}
        </div>
    </div>
  )
}

export default Instructor