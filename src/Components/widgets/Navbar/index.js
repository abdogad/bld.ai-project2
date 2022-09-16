import React from 'react'
import udemyLogo from '../../../Assets/logo-udemy.svg'
import searchIcon from '../../../Assets/searchicon.svg'
import Lang from '../../../Assets/language-svgrepo-com.svg'
import Cart from '../../../Assets/cart-svgrepo-com.svg'
import Menu from '../../../Assets/menu.png'
import {Link,useNavigate} from 'react-router-dom'
function Navbar() {
  const [value,setValue] =  React.useState("")
  const changeValue = (e) => {
    setValue(e.target.value)
  }
  const navigate = useNavigate()
  function submithandler(e){
    e.preventDefault();
    navigate("/search="+value);
  }
  return (
    
    <div className=" flex flex-row shadow-md h-20 z-50 bg-white-2 relative">
      <div className='mx-5 pt-3 md:hidden'>
        <img src={Menu} height={50} width={50}/>
      </div>
      <Link to='/'>
      <div className="mx-5 py-4 absolute right-5 hover:cursor-pointer md:static">
        <img src={udemyLogo} alt="logo" width={91} height={34}/>
      </div>
      </Link>
      <div className="hover:text-violet-500 text-sm hover:cursor-pointer mr-3 pt-6 hidden md:block">
        <p>Categories</p>
      </div>
      <div className='mx-3 pt-3 w-6/12 hidden md:block'>
        <div className='border rounded-full border-black w-full h-12'>
          <form className='relative flex flex-row' onSubmit={submithandler}>
            <input type="text" placeholder="Search for anything" className="ml-10 w-4/5 h-9 bg-white px-5 pr-16 pt-2 text-sm focus:outline-none" onChange={changeValue} value={value}/> 
            <button type="submit" className="absolute left-5 top-3 hover:text-violet-500">
              <img src={searchIcon} alt="search" width={20} height={20}/>
            </button>
          </form>
        </div>
      </div>
      
      <div className="hover:text-violet-500 text-sm hover:cursor-pointer mr-2 pt-6 w-32 text-center hidden xl:block">
        <p>Udemy Buissness</p>
      </div>
      <div className="hover:text-violet-500 text-sm hover:cursor-pointer mr-2 pt-6 w-32 text-center hidden lg:block">
        <p>Tech On Udemy</p>
      </div>
      <div className="pt-5 mr-2 hover:cursor-pointer hidden md:block">
        <img src={Cart} alt="cart" width={30} height={30} />
      </div>
      <div className='border border-solid border-black w-20 h-11 mt-4 mx-2 text-center pt-2 font-bold text-sm hover:bg-gray-100 hover:cursor-pointer hidden md:block'>
        <a className='no-underline text-black'>Login</a>
      </div>
      <div className='border border-solid border-white bg-black w-20 h-11 mt-4 text-center pt-2 font-bold text-sm hover:bg-gray-900 hover:cursor-pointer hidden md:block'>
        <a className='no-underline text-white-2'>Sign out</a>
      </div>
      <div className='border border-solid border-black w-11 h-11 mt-4 mx-2 text-center pt-2 pl-2 font-bold text-sm hover:bg-gray-100 hover:cursor-pointer hidden md:block'>
        <a className='no-underline text-black'><img src={Lang} alt='languages'></img></a>
      </div>
    </div>
  )
}

export default Navbar