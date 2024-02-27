import toast from 'react-hot-toast'
import Loader from '../../../shared/Loader/Loader'
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import {  
          useCourseCountQuery, 
          useDeleteSingleCourseMutation, 
          useGetAllCoursesQuery
        } from './courseApiSlice'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import UpdateCourse from './UpdateCourse'
import { useState } from 'react'


const Course = () => {
    let content
    const navigate = useNavigate()
    const [modalOpen,setModalOPen] = useState(false)
    const {data: count} = useCourseCountQuery()
    const {data: courses , isError , isLoading , isFetching , isSuccess } = useGetAllCoursesQuery()
    let [deleteSingleCourse , {
                isError: isDeleteError,
                isLoading:isDeleteLoading,
                isSuccess:isDeleteSuccess }] = useDeleteSingleCourseMutation()
    

    if(isFetching || isLoading || isDeleteLoading){
      return <Loader />
    }

    if(isDeleteError){
      toast.error("Failed to procceed!")
    }

    if(isDeleteSuccess){
      toast.success("Course Deleted!")
    }


    const handleDeleteCourse = async( id ) =>{
      await deleteSingleCourse(id)
    }

    console.log(courses?.courses)

    content = (
      <div className='dash-course-holder'>
        <h1>All Courses</h1>
        <h2>Total course: {courses?.courses.length}</h2>
        {/* <button onClick={() => navigate('/dash/add')} className='bg-white text-black py-2 px-8'>Add Post</button> */}
        <table className='users-table'>
                <thead>
                    <tr>
                        <th>serial</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Code</th>
                        <th>Assignment</th>
                        <th>Exam</th>
                        <th>Fee</th>
                        <th>Class Number</th>
                        <th>Total Enroled</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.courses.map((course, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{course?._id}</td>
                            <td>{course?.course_title}</td>
                            <td>{course?.code}</td>
                            <td>{course?.course_assignment}</td>
                            <td>{course?.course_exam}</td>
                            <td>{course?.course_fee}</td>
                            <td>{course?.course_nmbr}</td>
                            <td>{course?.course_nmbr}</td>
                            <td><button onClick={() => handleDeleteCourse(course._id)}><FontAwesomeIcon icon={faTrashCan} size='xl'/></button></td>
                            <td><button onClick={() => setModalOPen(!modalOpen)}><FontAwesomeIcon icon={faPenNib} size='xl'/></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <UpdateCourse 
              modalOpen={modalOpen}
              setModalOPen={setModalOPen}
            />
      </div>
    )

    return content
}

export default Course