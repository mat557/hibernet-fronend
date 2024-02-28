import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from "react-hook-form"
import { useUpdateSingleBlogMutation } from './blogApiSlice'
import toast from 'react-hot-toast'

const UpdateBlog = ({ blogModalOpen , setblogModalOpen , blogUpdateId }) => {
  let content
  const { register, handleSubmit , reset} = useForm()
  const [updateSingleBlog] = useUpdateSingleBlogMutation()

  const onSubmit = async(data) => {
    const updatedBlog = {
      "id"          : blogUpdateId,
      "blog_author" : data.blog_author,
      "author_email": data.author_email,
      "blog_content": data.blog_content,
      "blog_tag"    : data.blog_tag,
      "blog_title"  : data.blog_title
    }
    const res = await updateSingleBlog(updatedBlog)
    if(res && res?.error){
      toast.error(res?.error?.data?.message)
    }else if(res && res?.data?.doc.acknowledged){
      toast.success("Update!")
    }
    reset()
  }
  content = (
      <div className={blogModalOpen ? 'updatebox-holder open' : 'updatebox-holder'}>
        <div className="update-content">
          <h5 className='modal-h' >proceed for id- {blogUpdateId} ?</h5>
          <button className='modal-close' onClick={() => setblogModalOpen(!blogModalOpen)}><FontAwesomeIcon icon={faXmark}/></button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="blog Title" {...register("blog_title")}/>
            <input type="text"  placeholder="Author name" {...register("blog_author")}/>
            <input type="email"  placeholder="Author email" {...register("author_email")}/>
            <input type="text"  placeholder="Tags{add comma after each tag}" {...register("blog_tag")}/>
            <textarea type="text"  placeholder="Content" {...register("blog_content")}/>
            
            <button className="input-btn">Submit</button>
        </form>
        </div>
      </div>
    )


  return content 
}

export default UpdateBlog