import { useEffect } from 'react'
import { useGetSingleCourseQuery } from '../DashBoard/Courses/courseApiSlice'
import './CourseDetails.css'
import { useParams } from 'react-router-dom'
import Loader from '../../shared/Loader/Loader'

const CourseDetails = () => {
    let content
    const {id} = useParams()
    const {data: course , isLoading} = useGetSingleCourseQuery(id)

    if(isLoading){
        return <Loader />
    }


    
    content = (
        <div className='course-details-holder'>
            <div className="single-details">
                <div className='details'>
                    <h1>{course.course.course_description}</h1>
                </div>

                <h2>{course.course.course_title}</h2>
                <p>Total exams: {course.course.course_exam}</p>
                <p>Total assignments: {course.course.course_assignment}</p>
                <p>Total classed:{course.course.course_nmbr}</p>
                <p>Total classed:{course.course.course_fee}</p>
                <button>Enrol</button>
            </div>
        </div>
    )
    return content
}

export default CourseDetails