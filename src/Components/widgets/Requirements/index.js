import React from 'react'

function Requirements(props) {
  return (
    <div className='mt-10'>
        <p className='text-2xl font-bold'>Requirements</p>
        <ul className='mt-5 px-5'>
            {props.requirements.map((requirement) =>
                <li key={props.requirements.indexOf(requirement)} className='list-disc py-2'>
                    <p className='text-sm'>{requirement}</p>
                </li>
            )}
        </ul>

    </div>
  )
}

export default Requirements