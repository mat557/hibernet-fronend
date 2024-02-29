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

    console.log(course.course)
    
    content = (
        <div className='course-details-holder'>
            <div className="single-details">
                <div className='details'>
                    <h1>{course.course.course_description}</h1>
                </div>
                <p>{course.course.course_title}</p>
                <p>{course.course.course_exam}</p>
                <p>{course.course.course_assignment}</p>
                <p>{course.course.course_nmbr}</p>
                <button>Enrol</button>
            </div>
        </div>
    )
    return content
}

export default CourseDetails