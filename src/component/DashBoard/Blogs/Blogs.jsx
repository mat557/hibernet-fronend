import './Blogs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UpdateBlog from './UpdateBlog'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDeleteSingleBlogMutation, useGetAllBlogsQuery } from './blogApiSlice'
import Loader from '../../../shared/Loader/Loader'
import toast from 'react-hot-toast'

 
const Blogs = () => {
    let content
    const [show,setShow] = useState(false)
    const [blogModalOpen,setblogModalOpen] = useState(false)
    const [blogUpdateId,setBlogUpdateId] = useState('')
    const { data: blogs , isLoading } = useGetAllBlogsQuery()
    const [deleteSingleBlog , { isLoading: isDeleteLoading }] = useDeleteSingleBlogMutation()
    const [con,setCon] = useState('')
    
    if(isLoading ){
      return <Loader />
    }


    const handleDeleteCourse = async(id) =>{
      const res = await deleteSingleBlog(id)
      if(res && res?.error){
        toast.error(res?.error?.data?.message)
      }else if(res && !res?.error){
        if(res?.data?.result?.acknowledged){
          toast.success(res?.data?.message)
        }
      }
    }

    const handleHideButton = () =>{
      setShow(!show)
    }


    content = (
      <div className='dash-blog-holder'>
        <h1>All Blogs</h1>
        <h2>Total blogs: {blogs.blogs.length}</h2>

        <div className={show ? 'show_cont open' : 'show_cont'}>
          <div className='show-cont-holder'>
            <div className="con"> 
              <button onClick={() => handleHideButton()}>hide</button>
              <p>{con}</p>
            </div> 
          </div>
        </div>

        <table className='users-table'>
                <thead>
                    <tr>
                        <th>serial</th>
                        <th>Id</th>
                        <th>Author email</th>
                        <th>Author name</th>
                        <th>Details</th>
                        <th>Blog tags</th>
                        <th>Blog title</th>
                        <th>Updated</th>
                        <th>Dislike</th>
                        <th>Like</th>
                        <th>Posted</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.blogs.map((blog, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{blog?._id}</td>
                            <td>{blog?.author_email}</td>
                            <td>{blog?.blog_author}</td>
                            <td><button onClick={() => {setShow(!show);setCon(blog?.blog_content)}}>show</button></td>
                            <td>{blog?.blog_tag}</td>
                            <td>{blog?.blog_title}</td>
                            <td>{blog?.update_count} times</td>
                            <td>{blog?.dislike_count.length}</td>
                            <td>{blog?.like_count.length}</td>
                            <td>{blog?.postedAt}</td>
                            <td><button onClick={() => handleDeleteCourse(blog._id)}><FontAwesomeIcon icon={faTrashCan} size='xl'/></button></td>
                            <td><button onClick={() => {setblogModalOpen(!blogModalOpen);setBlogUpdateId(blog._id)}}><FontAwesomeIcon icon={faPenNib} size='xl'/></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <UpdateBlog 
              blogModalOpen={blogModalOpen}
              setblogModalOpen={setblogModalOpen}
              blogUpdateId={blogUpdateId}
              setBlogUpdateId={setBlogUpdateId}
            />
      </div>
    )
  
    return content
}

export default Blogs