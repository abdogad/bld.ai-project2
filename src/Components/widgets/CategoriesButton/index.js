import React from 'react';

function CategoriesButton(props) {
    return (
        <div className='border border-solid border-black w-36 text-center py-3 font-bold text-sm hover:bg-gray-100 hover:cursor-pointer'>
            <a className='no-underline text-black'>Explore Python</a>
        </div>
    );
}

export default CategoriesButton;