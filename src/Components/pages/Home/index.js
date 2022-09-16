import React from 'react';
import CourseContainer from '../../widgets/CourseContainer';
import MiddleSection from '../../widgets/MiddleSection';
import Navbar from '../../widgets/Navbar';
import { useEffect } from 'react';
function Home(props) {
    const courses = props.courses;
    useEffect(() => {

        window.scrollTo(0, 0);
    },[])
    return (
        <>
        
        <Navbar />
        <MiddleSection />
        <CourseContainer courses = {courses} />
        
        </>
    );
}

export default Home;