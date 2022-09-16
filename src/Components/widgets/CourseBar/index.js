import React from 'react'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
function CourseBar(props) {
  return (
    <div className='h-20 hidden fixed top-0 z-20 w-full bg-black xl:block pt-3 pl-9'>
        <p className='text-white-2 font-extrabold'>{props.title}</p>
        <div className='flex flex-row text-sm mt-2'>
            <h3 className='text-orange-300 font-bold mr-1 -mt-0.5'>{props.rating}</h3>
            <Rating
            name="text-feedback"
            value={1}
            readOnly
            precision={0.5}
            size='small'
            emptyIcon={<StarIcon style={{ opacity: 0 }} fontSize="inherit" />}
            />
            <a href='#reviews' className='text-violet-300 -mt-0.5 underline -ml-14'>({props.ratingCount} ratings)</a>
            <p className='text-white-2 font-sans ml-3'>{props.studentsCount} students</p>
        </div>
    </div>
  )
}

export default CourseBar