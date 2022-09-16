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
  const arr= props.arr
  const [state , setState] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const scrollValue = () => {
    if(window.scrollY > 300){
      setState(true)
    }else{
      setState(false)
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
    <div>

        <CourseBar title={arr[0].title} rating={arr[0].rate} ratingCount={arr[0].ratingCount} studentsCount={arr[0].enrollCount}/>
        <Navbar />
        
        <CourseDescription price = {arr[0].price} originalPrice={arr[0].originalPrice} size={windowSize < 1280} image = {arr[0].image} author={arr[0].instructor} title={arr[0].title} rating={arr[0].rate} ratingCount={arr[0].ratingCount} studentsCount={arr[0].enrollCount} description={arr[0].Introduction} />
        
        {windowSize > 1280 && <div className={state?"fixed top-16 right-32 z-50 w-80 bg-white-2 border shadow-md":"absolute top-52 right-32 w-80 bg-white-2 shadow-md"}>
          {state || <Video image = {arr[0].image}/>}
          <div className='px-3 py-3'><CourseInfo price = {arr[0].price} originalPrice={arr[0].originalPrice} lecture = {arr[0].hoursCount} article = {arr[0].articlesCount} downloadable = {arr[0].downloadableResource}/></div>
        </div>}
        <div className='mx-5' style={windowSize >1280 ?{ marginLeft: window.screen.width - windowSize<196 ? 224 - (window.screen.width-windowSize) + 'px':"30px",marginRight:"30rem" }:{}}>
          <CourseLearn CourseLearn={arr[0].overview}/>
          <CourseContent content={arr[0].content} lecture={arr[0].lecturesCount} length={arr[0].totalLength}/>
          <Requirements requirements={arr[0].requirements}/>
          <AboutCourse description={arr[0].description} />
          <WhoFor whofor={arr[0].whoFor}/>
          <Instructor instructors = {arr[0].instructor}/>
          <StudentFeedback feedback={arr[0].studentFeedback} rating={arr[0].rate}/>
          <Reviews reviews = {arr[0].reviews}/>
          
        </div>
        <Footer />
    </div>
  )
}

export default Course