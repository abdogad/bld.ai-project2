import React from 'react';
import {arr} from 'D:/lll/cod/react/my-app/src/constants/data.js'
import Coursebody from '../CourseBody';
import CategoryDescription from '../CategoryDescription';
import CategoriesButton from '../CategoriesButton';
function CourseContainer(props) {
    function getdata(){
        let ans = arr.courses.map((course) => 
            <Coursebody key={course.title} rating ={course.rating} title = {course.title} image = {course.image} author= {course.instructors[0].name} price = {course.price} />
            )
        return ans
    }
    return (
        <div className=" border-gray-300 border-solid border mx-10 my-5 px-14">
            <CategoryDescription />
            <CategoriesButton />
            <div className='flex flex-wrap justify-left'>
            {getdata()}
            </div>
        </div>
    );
}

export default CourseContainer;