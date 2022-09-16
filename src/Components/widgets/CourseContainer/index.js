import React from 'react';
import Coursebody from '../CourseBody';
import CategoryDescription from '../CategoryDescription';
import CategoriesButton from '../CategoriesButton';
import {useParams} from 'react-router-dom';
function CourseContainer(props) {
    const courses = props.courses;
    let {text} = useParams();
    function getData(){
        
        let ans = courses.courses.map((course) => 
        (text == null || course.title.toLowerCase().includes(text.toLowerCase())) &&
            <Coursebody key={course.title} rating ={course.rate} title = {course.title} image = {course.image} author= {course.instructor[0].name} price = {course.price} id ={course.id} />
        
            )
        
        return ans
    }
    return (
        <div className=" border-gray-300 border-solid border mx-10 my-5 px-8 xl:mx-24">
            <CategoryDescription />
            <CategoriesButton />
            <div className='flex flex-wrap justify-left'>
                {getData()}
            </div>
        </div>
    );
}

export default CourseContainer;