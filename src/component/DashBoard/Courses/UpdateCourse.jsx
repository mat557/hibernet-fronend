import './css/UpdateCourse.css'
import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const UpdateCourse = ({ modalOpen , setModalOPen }) => {
    let content
    const { register, handleSubmit } = useForm()


    const onSubmit = async(data) => {}

    content = (
      <div className={modalOpen ? 'updatebox-holder open' : 'updatebox-holder'}>
        <div className="update-content">
          <button className='modal-close' onClick={() => setModalOPen(!modalOpen)}><FontAwesomeIcon icon={faXmark}/></button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Course Title" {...register("course_title")}  required />
            <input type="number"  placeholder="total class number" {...register("course_nmbr")}  required />
            <input type="number"  placeholder="total exam number" {...register("course_exam")}  required />
            <input type="number"  placeholder="total assignment number" {...register("course_assignment")}  required />
            <select {...register("code")} required >
              <option value="physics-1">Physics First Paper</option>
              <option value="physics-2">Physics Second Paper</option>
              <option value="chemistry-1">Chemistry First Paper</option>
              <option value="chemistry-2">Chemistry Second Paper</option>
              <option value="math-1">Math First Paper</option>
              <option value="math-2">Math Second Paper</option>
            </select>
            <textarea type="text" placeholder="Course description" {...register("course_description")}  required />
            <input type="number" placeholder="Course fee" {...register("course_fee")}  required />
            <button className="input-btn">Submit</button>
          </form>
        </div>
      </div>
    )


    return content 
}

export default UpdateCourse