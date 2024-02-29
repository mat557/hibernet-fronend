import { useNavigate } from 'react-router-dom'
import Footer from '../../shared/Footer/Footer'
import Loader from '../../shared/Loader/Loader'
import { useGetAllCoursesQuery } from '../DashBoard/Courses/courseApiSlice'
import './Courses.css'

const Courses = () => {
    let content
    const navigate = useNavigate()
    const {data: courses , isLoading} = useGetAllCoursesQuery()
    

    if(isLoading){
        return <Loader />
    }



    content = (
        <div className='course'>
            <div className="course-header">
                <div className="course-cont">
                    <p>course</p>
                </div>
            </div>
            <div className="courses">
                {
                    courses.courses.map((course) =>
                    <div  className='single-course' key={course._id}>
                        <div className='single-course-data'>
                            <p>{course.course_title}</p>
                            <h1>Total assignments- {course.course_assignment}</h1>
                            <h1>Total exams- {course.course_exam}</h1>
                            <h1>Total Classes- {course.course_nmbr}</h1>
                            <h1>Course fee- {course.course_fee}</h1>
                        </div>
                        <button onClick={() => navigate(`/course/details/${course._id}`)}>Details</button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
    return content
}

export default Courses