import './Banner.css'
import banner from '../../../assets/banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useGetAllCoursesQuery } from '../../DashBoard/Courses/courseApiSlice'
import Loader from '../../../shared/Loader/Loader'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    let content
    const navigate = useNavigate()
    const [current,setCurrent] = useState(0)
    const {data:courses , isLoading} = useGetAllCoursesQuery()
    
    if(isLoading){
        return <Loader />
    }
    let bannerData = courses.courses.slice(0,3)

    const handleNxt = () =>{
        if(current < 2) {
            setCurrent(current+1)
        }
    }

    const handlePrv = () =>{
        if(current > 0){
            setCurrent(current-1)
        }
    }

    
    content = (
        <div className='banner' >
            <div className="overlay"></div>
            <img src={banner} alt="" />
                <div className='info-box'>
                    <div className='info'>
                        <h1>{bannerData[current]?.course_title}</h1>
                        <p>Total classes- {bannerData[current]?.course_nmbr}</p>
                        <p>Total exams- {bannerData[current]?.course_exam}</p>
                        <button onClick={() => navigate(`/course/details/${bannerData[current]?._id}`)}>check<FontAwesomeIcon icon={faArrowRight}/></button>
                    </div>
                    <div className='navigation'>
                        <button className={current === 0 ? 'dis' : 'nav-btn'} onClick={() => handlePrv()}><FontAwesomeIcon icon={faArrowLeft}/></button>
                        <button className={current === 2 ? 'dis' : 'nav-btn'} onClick={() => handleNxt()}><FontAwesomeIcon icon={faArrowRight}/></button>
                    </div>
                </div>
        </div>
    )
    return content
}

export default Banner