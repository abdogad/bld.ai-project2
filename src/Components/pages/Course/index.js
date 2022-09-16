import React, { useEffect ,useState} from 'react'
import CourseInfo from '../../widgets/CourseInfo'
import Navbar from '../../widgets/Navbar'
import { useCallback } from 'react'
import CourseBar from '../../widgets/CourseBar'
import CourseDescription from '../../widgets/CourseDescription'
import CourseLearn from '../../widgets/CourseLearn'
import CourseContent from '../../widgets/CourseContent'
import Requirements from '../../widgets/Requirements'
import AboutCourse from '../../widgets/AboutCourse'
import WhoFor from '../../widgets/WhoFor'
import Instructor from '../../widgets/Instructor'
import StudentFeedback from '../../widgets/StudentFeedback'
import Reviews from '../../widgets/Reviews'
import Video from '../../widgets/Video'
import Footer from '../../widgets/Footer'
function Course(props) {
  const course= props.course
  const [show , setShow] = useState(false)
  const [show_1 , setShow_1] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  var limit;
  useEffect(() => {
    limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
    document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
  },[])
  const scrollValue = () => {
    if(window.scrollY > 300){
      
      setShow(true)
    }else{
      setShow(false)
    }
    console.log(limit)
    console.log(window.scrollY)
    if( window.scrollY > limit-1200){
      setShow_1(true)
    }
    else{
      setShow_1(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollValue)
    return () => {
      window.removeEventListener('scroll', scrollValue)
    }
  }, [])
  const handleWindowResize = useCallback(event => {

    setWindowSize(window.innerWidth);

  },[]); 
  useEffect(() => {

    window.scrollTo(0, 0);
  },[])
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);
  return (
    <div className='relative'>

        <CourseBar title={course[0].title} rating={course[0].rate} ratingCount={course[0].ratingCount} studentsCount={course[0].enrollCount}/>
        <Navbar />
        
        <CourseDescription price = {course[0].price} originalPrice={course[0].originalPrice} size={windowSize < 1280} image = {course[0].image} author={course[0].instructor} title={course[0].title} rating={course[0].rate} ratingCount={course[0].ratingCount} studentsCount={course[0].enrollCount} description={course[0].Introduction} />

        {windowSize > 1280  && <div className={show ? (!show_1 ? "fixed top-16 right-32 z-50 w-80 bg-white-2 border shadow-md" : "absolute right-32  w-80 bg-white-2 border shadow-md"):"absolute top-52 right-32 w-80 bg-white-2 shadow-md"} style={show_1? {bottom:450}:{}}>
          {show || <Video image = {course[0].image}/>}
          <div className='px-3 py-3'><CourseInfo price = {course[0].price} originalPrice={course[0].originalPrice} lecture = {course[0].hoursCount} article = {course[0].articlesCount} downloadable = {course[0].downloadableResource}/></div>
        </div>}
        <div className='mx-5' style={windowSize >1280 ?{ marginLeft: window.screen.width - windowSize<196 ? 224 - (window.screen.width-windowSize) + 'px':"30px",marginRight:"30rem" }:{}}>
          <CourseLearn CourseLearn={course[0].overview}/>
          <CourseContent content={course[0].content} lecture={course[0].lecturesCount} length={course[0].totalLength}/>
          <Requirements requirements={course[0].requirements}/>
          <AboutCourse description={course[0].description} />
          <WhoFor whofor={course[0].whoFor}/>
          <Instructor instructors = {course[0].instructor}/>
          <StudentFeedback feedback={course[0].studentFeedback} rating={course[0].rate}/>
          <Reviews reviews = {course[0].reviews}/>
          
        </div>
        <Footer />
    </div>
  )
}

export default Course