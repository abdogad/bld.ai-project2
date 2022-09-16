import React from 'react'
import people from '../../../Assets/people.svg'
import medal from '../../../Assets/medal.svg'
import play from '../../../Assets/play.svg'
import star from '../../../Assets/star.svg'
function InstructorCard(props) {
  return (
    <div>
        <div className='mt-5'>
            <p className='text-lg font-bold text-violet-700 underline'>{props.instructor.name}</p>
            <p className=' text-gray-400 mb-3'>{props.instructor.Intro}</p>
            <div className='flex flex-row'>
                <img src={props.instructor.Image} alt={props.instructor.name} className='rounded-full w-28 h-28 ' />
                <div className='mt-2 ml-3'>
                    <div className='flex flex-row'>
                        <img src={star} alt='star' className='w-5 h-5  mr-1' />
                        <p className='text-sm  ml-5'>{props.instructor.Rating} Instructor Rating</p>
                    </div>
                    <div className='flex flex-row mt-1'>
                        <img src={medal} alt='medal' className='w-5 h-5  mr-1' />
                        <p className='text-sm  ml-5'>{props.instructor.reviewsNumber} Reviews</p>
                    </div>
                    <div className='flex flex-row mt-1'>
                        <img src={people} alt='people' className='w-5 h-5  mr-1' />
                        <p className='text-sm  ml-5'>{props.instructor.studentsNumber} Students</p>
                    </div>
                    <div className='flex flex-row mt-1'>
                        <img src={play} alt='play' className='w-5 h-5  mr-1' />
                        <p className='text-sm  ml-5'>{props.instructor.coursesNumber} courses</p>
                    </div>

                </div>
            </div>
            <div className='flex flex-col mt-3'>
                <p className='text-sm font-sans '>{props.instructor.description}</p>
            </div>
        </div>
    </div>
  )
}

export default InstructorCard