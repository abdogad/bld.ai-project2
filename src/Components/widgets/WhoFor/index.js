import React from 'react'

function WhoFor(props) {
  return (
    <div>
        <p className='text-2xl font-bold mt-10'>Who is this course for?</p>
        <ul className='mt-2 px-5'>
            {props.whofor.map((who) =>
                <li key={props.whofor.indexOf(who)} className='list-disc  py-2'>
                    <p className='text-sm'>{who}</p>
                </li>
            )}
        </ul>


    </div>
  )
}

export default WhoFor