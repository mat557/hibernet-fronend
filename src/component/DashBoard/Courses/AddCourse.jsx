import { useForm } from "react-hook-form"
import '../Courses/css/AddCourse.css'
import { useInsertSingleCourseMutation } from "./courseApiSlice"
import Loader from "../../../shared/Loader/Loader"
import toast from "react-hot-toast"

const AddCourse = () => {
    let content
    const { register, handleSubmit } = useForm()
    const [insertSingleCourse,  {isError,isLoading,isSuccess,error}] = useInsertSingleCourseMutation()


    if(isLoading){
      return <Loader />
    }

    const onSubmit = async(data) => {
      const response = await insertSingleCourse(data)
      if(response && response?.data?.doc.acknowledged){
        toast.success(response.data.message)
      }else{
        toast.error("Insertion failed")
      }
    }


    content = (
      <div className="add-course-holder">
        <h1 className="text-[white] font">Add course</h1>
        
        
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
    ) 
    return content
}

export default AddCourse