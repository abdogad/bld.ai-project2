import React from 'react'
import {Rating} from '@mui/material'
import Video from '../Video'
function CourseDescription(props) {
    const getAuthors = () => {
        let authors = []
        props.author.forEach((authori) => {
            authors.push(authori.name)
        })
        return authors.join(', ')
    }
    
  return (
    <div className='bg-zinc-900 xl:pl-52 py-7 px-10'>
        <div className='xl:w-7/12'>
        <div className=' flex flex-row text-sm font-bold mb-5'>
            <p className='text-violet-300'>Development</p> <p className='text-white-2 mx-3'> {">"} </p> <p className='text-violet-300'>Programming Languages </p><p className='text-white-2 mx-3'> {">"} </p> <p className='text-violet-300'>Python </p>
        </div>
        {props.size && <Video image = {props.image} />}
        <p className='font-bold text-white-2 text-3xl mt-3'>{props.title}</p>
        <p className='text-white-2 text-lg mt-3'>{props.description}</p>
        
        <div className='flex flex-row text-sm mt-4'>
            <h3 className='text-orange-300 font-bold mr-1 -mt-0.5'>{props.rating}</h3>
            <Rating
            name="text-feedback"
            value={parseFloat(props.rating)}
            readOnly
            precision={0.10}
            size='small'
            />
            <a href='#reviews' className='text-violet-300 -mt-0.5 underline'>({props.ratingCount} ratings)</a>
            <p className='text-white-2 font-sans ml-3'>{props.studentsCount} students</p>
        </div>
        <div className='flex flex-row mt-3'>
            <p className='text-white-2 text-sm'>Created by</p> <p className='text-violet-300 text-sm ml-1 underline'>{getAuthors()}</p>
        </div>
        {props.size && <div><div className='font-bold text-3xl mt-5 text-white-2 flex flex-row'>
        <p>{props.price}$</p>
        <p className='text-gray-400 ml-5 text-sm line-through mt-2'>{props.originalPrice === props.price ? '' : props.originalPrice}$ </p>
      </div>
      <div className='border border-solid border-black bg-violet-600 h-11 mt-6 text-center pt-2 font-bold text-sm hover:bg-violet-700 hover:cursor-pointer'>
        <a href="#" className='no-underline text-white-2'>Add To Cart</a>
      </div>
      <div className='text-xs text-white-2 text-center my-2'><p>30-Day Money-Back Guarantee</p></div></div>}
        </div>
    </div>
  )
}

export default CourseDescription