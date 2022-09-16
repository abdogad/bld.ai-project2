import React from 'react'
import ContentList from '../ContentList'
function CourseContent(props) {
    return (
    <div>
        <p className='text-2xl font-bold' >Course Content</p>
        <div className='flex flex-row mt-5 justify-between'>
            <p className='text-sm'>{props.content.length} sections {props.lecture} lectures {props.length} total length</p>
            <p className='text-sm font-bold text-violet-700 underline'>Expand All</p>
        </div>
        <div className='flex flex-col mt-5'>
            {props.content.map((section) =>
                <ContentList section={section} key={props.content.indexOf(section)} />
            )}
        </div>
    </div>
  )
}

export default CourseContent