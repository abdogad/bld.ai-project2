import React from 'react'
import article from '../../../Assets/article.svg'
import lectures from '../../../Assets/lectures-length.svg'
import lifetime from '../../../Assets/lifetime.svg'
import mobile from '../../../Assets/mobile.svg'
import downloadable from '../../../Assets/downloadable.svg'
import cup from '../../../Assets/cup.svg'
function CourseInfo(props) {
  return (
    <div className=''>
      <div className='font-bold text-5xl flex flex-row justify-between'>
        <p>{props.price}$</p>
        <p className='text-gray-400 text-lg line-through mt-3'>{props.originalPrice === props.price ? '' : props.originalPrice}$ </p>
      </div>
      <div className='border border-solid border-black bg-violet-600 h-11 mt-6 text-center pt-2 font-bold text-sm hover:bg-violet-700 hover:cursor-pointer'>
        <a  className='no-underline text-white-2'>Add To Cart</a>
      </div>
      <div className='border border-solid border-black h-11 mt-4 text-center pt-2 font-bold text-sm hover:bg-gray-100 hover:cursor-pointer'>
        <a className='no-underline text-black'>Buy Now</a>
      </div>
      <div className='text-xs text-center my-2'><p>30-Day Money-Back Guarantee</p></div>
      <div className='my-2 py-3'>
        <p className='font-bold text-sm'>This Course Includes:</p>
        <div className='text-sm flex flex-row my-2'>
          <img src={lectures} alt='watch' width={16} height={16} className='mr-3'/>
          <p>{props.lecture} hours on-demand video</p>
        </div>
        <div className='text-sm flex flex-row my-2'>
          <img src={article} alt='article' width={16} height={16} className='mr-3'/>
          <p>{props.article} article</p>
        </div>
        <div className='text-sm flex flex-row my-2'>
          <img src={downloadable} alt='folder with an arrow' width={16} height={16} className='mr-3'/>
          <p>{props.downloadable} downloadable resource</p>
        </div>
        <div className='text-sm flex flex-row my-2'>
          <img src={lifetime} alt='infinity' width={16} height={16} className='mr-3'/>
          <p>Full lifetime access</p>
        </div>
        <div className='text-sm flex flex-row my-2'>
          <img src={mobile} alt='mobile' width={16} height={16} className='mr-3'/>
          <p>Access on mobile and TV</p>
        </div>
        <div className='text-sm flex flex-row my-3'>
          <img src={cup} alt='cup' width={16} height={16} className='mr-2'/>
          <p>Certificate of completion</p>
        </div>
        <div className='h-0.5 bg-gray-300 my-3'></div>
        <div>
          <p className='font-bold'>Training 5 or more people?</p>
          <p className='text-sm'>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
          <div className='border border-solid border-black h-11 mt-4 text-center pt-2 font-bold text-sm hover:bg-gray-100 hover:cursor-pointer hidden md:block'>
            <a className='no-underline text-black'>Try Udemy Buissness</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseInfo