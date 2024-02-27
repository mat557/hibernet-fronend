import './css/UpdateCourse.css'
import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useUpdateSingleCourseMutation } from './courseApiSlice'
import toast from 'react-hot-toast'
import Loader from '../../../shared/Loader/Loader'

const UpdateCourse = ({ modalOpen , setModalOPen , setUpdateId , updateId }) => {
    let content
    const { register, handleSubmit , reset} = useForm()
    const [updateSingleCourse ] = useUpdateSingleCourseMutation()

    const onSubmit = async(data) => {
      if(!updateId) toast.error("No id found")
      const updatedData = {
          "code"              : data?.code,
          "course_assignment" : data?.course_assignment,
          "course_description": data?.course_description,
          "course_exam"       : data?.course_exam,
          "course_fee"        : data?.course_fee,
          "course_nmbr"       : data?.course_nmbr,
          "course_title"      : data?.course_title,
          "id"               : updateId
      }
      const res = await updateSingleCourse(updatedData)
      if(res?.data?.doc?.acknowledged){
        toast.success("Course updated")
      }else{
        toast.error("Failed")
      }
      setModalOPen(!modalOpen)
      reset()
    }


    content = (
      <div className={modalOpen ? 'updatebox-holder open' : 'updatebox-holder'}>
        <div className="update-content">
          <h5 className='modal-h' >proceed for id- {updateId} ?</h5>
          <button className='modal-close' onClick={() => setModalOPen(!modalOpen)}><FontAwesomeIcon icon={faXmark}/></button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Course Title" {...register("course_title")} />
            <input type="number"  placeholder="total class number" {...register("course_nmbr")}/>
            <input type="number"  placeholder="total exam number" {...register("course_exam")}/>
            <input type="number"  placeholder="total assignment number" {...register("course_assignment")}/>
            <select {...register("code")}>
              <option value="">Select</option>
              <option value="physics-1">Physics First Paper</option>
              <option value="physics-2">Physics Second Paper</option>
              <option value="chemistry-1">Chemistry First Paper</option>
              <option value="chemistry-2">Chemistry Second Paper</option>
              <option value="math-1">Math First Paper</option>
              <option value="math-2">Math Second Paper</option>
            </select>
            <textarea type="text" placeholder="Course description" {...register("course_description")} />
            <input type="number" placeholder="Course fee" {...register("course_fee")}/>
            <button className="input-btn">Submit</button>
          </form>
        </div>
      </div>
    )


    return content 
}

export default UpdateCourse