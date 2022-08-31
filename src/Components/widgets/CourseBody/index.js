import React from 'react';
import { Rating } from '@mui/material';
function Coursebody(props) {
    return (
        <div className="acourse w-60 my-3 mr-4">
            <img className='border-solid border-black border' src={props.image} />
            <h3 className='font-bold'>{props.title}</h3>
            <h5 className='text-gray-500'>{props.author}</h5>
            <div className='flex'>
                <h3 className='text-red-800 font-bold'>{props.rating.toPrecision(2)}</h3><Rating name="read-only" value={props.rating} precision="0.10" readOnly />
            </div>
            <h3 className='font-medium'>{props.price}$</h3>
        </div>
    );
}

export default Coursebody;