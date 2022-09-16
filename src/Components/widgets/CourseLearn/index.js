import React from 'react'
import Sa7 from '../../../Assets/sa7.svg'
function CourseLearn(props) {
  function getData(){
    let ans = props.CourseLearn.map((course) => 
      <div key={props.CourseLearn.indexOf(course)} className='flex text-sm mr-5'><img className='mr-1' src={Sa7} alt="sa7" width={20} height={20}/>{course}</div>
        )
    return ans
}
  return (
    <div className='border px-3 py-2 my-12'  >
      
          <p className='font-bold'>What you'll learn</p>
          <div className='flex flex-row flex-wrap'>
            {getData()}
          </div>
        
      
    </div>
  )
}

export default CourseLearn