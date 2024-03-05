import { useNavigate } from 'react-router-dom'
import Loader from '../../shared/Loader/Loader'
import { useGetAllBlogsQuery } from '../DashBoard/Blogs/blogApiSlice'
import './Blog.css'

const Blog = () => {
    let content
    const navigate = useNavigate()
    const { data : blogs , isLoading } = useGetAllBlogsQuery()

    if(isLoading){
        return <Loader />
    }



    content = (
        <div className='blog'>
            <div className="blog-header">
                <div className="blog-cont">
                    <p>Blogs</p>
                </div>
            </div>
            <div className='blog-content'>
                <div className='blogs'>
                    {
                        blogs?.blogs?.map((blog) => 
                        <div className='single-blog' key={blog._id}>
                            <div className='blog-details'>
                                <h1>{blog?.blog_title}</h1>
                                <p>{blog?.blog_content.slice(0,150)}...</p>
                            </div>
                            <button onClick={() => navigate(`/blog/details/${blog._id}`)}>see more...</button>
                        </div>)
                    }
                </div>
                <div className='blogs-nav'></div>
            </div>
        </div>
    )

    return content
}

export default Blog