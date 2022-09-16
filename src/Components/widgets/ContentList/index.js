import React,{useState} from 'react'
import play from '../../../Assets/play.svg'
import back from '../../../Assets/Back Button.svg'
function ContentList(props) {
    const [show, setShow] = useState(false)
    const Show = () => {
        setShow(!show)
    }
  return (
    <div className='flex flex-col border'>
        <div className='flex flex-row bg-gray-50 justify-between hover:cursor-pointer' onClick={Show}>
            <div className='flex flex-row'>
                <img src={back} alt='back' className={show?'w-3 h-3 ml-5 mt-6 rotate-90':'w-3 h-3 ml-5 mt-6 -rotate-90'} />
                <p className=' font-extrabold text-sm py-5 px-3 hover:cursor-pointer' >{props.section[0]}</p>
            </div>

            <p className='mt-3 mr-5'>{props.section[1].length} lectures</p>
            
        </div>
        {show && <div className='flex flex-col'>
            {props.section[1].map((lecture) =>
                            
                <div key={props.section[1].indexOf(lecture)} className='flex flex-row py-2 px-5'>
                    <img src={play} alt='play' width={16} height={16}/>
                    <p className='text-sm ml-4'>{lecture}</p>
                                
                </div>
                            
                )
                        
            }
        </div>
        }
                    
    </div>
  )
}

export default ContentList