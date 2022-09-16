import './App.css';
import React, { useState, useEffect } from 'react';
import Course from './Components/pages/Course';
import Home from './Components/pages/Home/index';
import { CircularProgress } from '@mui/material';
import { BrowserRouter as Router, Routes, Route ,useParams ,Link} from 'react-router-dom';
function App() {
  const [courses,setCourses] = useState([]);
  const [loading,setloading] = useState(1);
  useEffect(() => {
    setloading(1)
    fetch(
      "https://mocki.io/v1/92545cc8-8edd-4773-91c2-9cb7ed1b1946")
                  .then((res) => res.json())
                  .then((json) => {
                      
                      setCourses(json);
                      setloading(0)
                  })
    
  },[])
  function CoursePage() {
    let { id } = useParams();
    console.log( id );
    let course = courses.courses
    course = course.filter(e=>e.id == id);
    if(course.length>0){
      return <Course arr={course} />;
    }
    else{
      return <div className='flex justify-center text-4xl text-white-2 h-full bg-black'>404 Not Found <Link to='/' className='underline text-violet-700'><br></br> Go home?</Link></div>

    }
    
  }
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path={"/"} element={loading === 1 ? <div className='flex justify-center items-center'><CircularProgress size={100}/></div> : <Home arr={courses} />} />
        <Route path={"/search=:text"} element={loading === 1 ? <div className='flex justify-center items-center'><CircularProgress size={100}/></div> : <Home arr={courses} />} />
        <Route path={"/course/:id"} element={loading === 1 ? <div className='flex justify-center items-center'><CircularProgress size={100}/></div> : <CoursePage />} />
        <Route path='*' element={<div className='flex justify-center text-4xl text-white-2 h-full bg-black'>404 Not Found <Link to='/' className='underline text-violet-700'><br></br> Go home?</Link></div>} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
