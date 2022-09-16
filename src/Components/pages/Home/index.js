import React from 'react';
import CourseContainer from '../../widgets/CourseContainer';
import MiddleSection from '../../widgets/MiddleSection';
import Navbar from '../../widgets/Navbar';
import { useEffect } from 'react';
function Home(props) {
    
    useEffect(() => {

        window.scrollTo(0, 0);
    },[])
    return (
        <>
        
        <Navbar />
        <MiddleSection />
        <CourseContainer arr = {props.arr} />
        
        </>
    );
}

export default Home;