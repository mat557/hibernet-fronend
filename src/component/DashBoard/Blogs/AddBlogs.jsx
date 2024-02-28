import { useForm } from "react-hook-form"
import { useInsertSingleBlogMutation } from "./blogApiSlice"
import toast from "react-hot-toast"
import Loader from "../../../shared/Loader/Loader"

const AddBlogs = () => {
    let content
    const { register, handleSubmit } = useForm()
    const [insertSingleBlog , { isLoading }] = useInsertSingleBlogMutation()

    if(isLoading){
      return <Loader />
    }

    const onSubmit = async(data) => {
      const res = await insertSingleBlog(data)
      if(res && res?.error){
        toast.error(res?.error?.data?.message)
      }else if(res && !res?.error){
        if(res?.data?.doc?.acknowledged){
          toast.success(res?.data?.message)
        }
      }
    }

    content = (
      <div className="add-course-holder">
        <h1 className="text-[white] font">Add Blog</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="blog Title" {...register("blog_title")}  required />
          <input type="text"  placeholder="Author name" {...register("blog_author")}  required />
          <input type="email"  placeholder="Author email" {...register("author_email")}  required />
          <textarea type="text"  placeholder="Blog content" {...register("blog_content")}  required />
          <input type="text"  placeholder="Tags{add comma after each tag}" {...register("blog_tag")}  required />
          
          <button className="input-btn">Submit</button>
        </form>

      </div>
    )
  
    return content 
}

export default AddBlogs