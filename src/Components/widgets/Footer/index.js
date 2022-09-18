import React from 'react'
import {footer} from '../../constants/footer'
import whiteLang from '../../../Assets/white-lang.svg'
function Footer() {
  return (
    <div className='bg-black px-5 py-10'>

        <div className='relative'>
        <div className='mb-5 sm:hidden'>
          <div  className=' border border-solid border-white bg-black w-32 h-11 flex items-center pl-5 font-bold text-sm hover:bg-gray-900 hover:cursor-pointer'>
            <a href="#" className='no-underline text-white-2 flex'><img src={whiteLang} alt='white language'></img> English</a>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row'>

          <ul className='w-40'>
            {footer.map((item,index) => {
              if(index < 5){
                return <li className='text-sm text-white-2 py-1' key={index}>{item}</li>
              }
              else return ""
            })}
          </ul>
          <ul className='w-40'>
            {footer.map((item,index) => {
              if(index >= 5 &&index<10){
                return <li className='text-sm text-white-2 py-1' key={index}>{item}</li>
              }
              else return ""
            })}
          </ul>
          <ul className='w-40'>
            {footer.map((item,index) => {
              if(index >= 10 &&index<15){
                return <li className='text-sm text-white-2 py-1' key={index}>{item}</li>
              }
              else return ""
            })}
          </ul>
        </div>
        <div className='flex-row top-0 right-0 hidden absolute sm:block'>
          <div  className=' border border-solid border-white bg-black w-32 h-11 flex items-center pl-5 font-bold text-sm hover:bg-gray-900 hover:cursor-pointer'>
            <a href="#" className='no-underline text-white-2 flex'><img src={whiteLang} alt='white language'></img> English</a>
          </div>
        </div>
      
        </div>
        <div className='flex flex-row justify-between my-20'>
          <img width={16} height={10} src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt='udemy logo' className='w-32' />
          <p className='text-white-2'>© 2022 Udemy, Inc.</p>
        </div>
    </div>
  )
}

export default Footer