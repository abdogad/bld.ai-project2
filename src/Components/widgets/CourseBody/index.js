import React from 'react';
import { Rating } from '@mui/material';
import  {Link} from  'react-router-dom' ; 
function Coursebody(props) {
    return (
        <Link to={"/course/"+props.id}>
        <div className="acourse w-60 my-3 mr-2 hover:cursor-pointer">
            
            <img className='border-solid border-black border' src={props.image} alt="course"/>
            <h3 className='font-bold'>{props.title}</h3>
            <h5 className='text-gray-500'>{props.author}</h5>
            <div className='flex'>
                <h3 className='text-red-800 font-bold'>{props.rating}</h3><Rating name="read-only" value={parseFloat(props.rating)} precision={0.10} readOnly />
            </div>
            <h3 className='font-medium'>{props.price}$</h3>
        </div>
        </Link>
    );
}

export default Coursebody;