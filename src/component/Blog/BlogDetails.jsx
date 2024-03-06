import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from '../../shared/Loader/Loader'
import { useDisLikeBlogMutation, useGetSingleBlogQuery, useLikeBlogMutation } from '../DashBoard/Blogs/blogApiSlice'
import './BlogDetails.css'
import { useParams } from 'react-router-dom'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import toast from 'react-hot-toast'
import useAuth from '../../hooks/useAuth'
import { useEffect, useState } from 'react'

const BlogDetails = () => {
    let content
    const {id} = useParams()
    const [email] = useAuth()
    const [emailFound,setEmailFound] = useState(false)
    const [disEmailFound,setDisEmailFound] = useState(false)
    const {data:blog , isLoading} = useGetSingleBlogQuery(id)
    const [ likeBlog , { isLoading: isLikeLoading }] = useLikeBlogMutation()
    const [ disLikeBlog ] = useDisLikeBlogMutation()
    

    useEffect(() => {
        const found = blog?.blog?.like_count.indexOf(email)
        if(found > -1){
            setEmailFound(true)
        }else{
            setEmailFound(false)
        }
        
        const found1 = blog?.blog?.dislike_count.indexOf(email)
        if(found1 > -1){
            setDisEmailFound(true)
        }else{
            setDisEmailFound(false)
        }



    }, [email,blog])
    

    if(isLoading){
        return <Loader />
    }

    const handleLike  = async() =>{
        const data = {
            id: id ,
            email: email
        }
        const res = await likeBlog(data)
        if(res && res?.error){
            toast.error(res?.error?.data?.message)
        }
    }

    const handleDisLike  = async() =>{
        const data = {
            id: id ,
            email: email
        }

        const res = await disLikeBlog(data)
        if(res && res?.error){
            toast.error(res?.error?.data?.message)
        }
    }


    content = (
        <div className='blog-details-holder'>
            <div className="blog-detail">
                
                <div className="blog-contents">
                    <h1>{blog.blog.blog_title}</h1>
                    <div className='blog-author'>
                        <h3>Blog author : {blog.blog.blog_author}</h3>
                        <h3>Author email: {blog.blog.author_email}</h3>
                        <h3>Posted      : {blog.blog.postedAt}</h3>
                        <h3>{blog.blog.update_count > 0 ? 'Edited' : '' }</h3>
                    </div>
                    <p>{blog.blog.blog_content}</p>
                    <div className='reaction'>
                        <h3 className='reaction-like'>Like: {blog.blog.like_count.length}    <FontAwesomeIcon onClick={() => handleLike()}       className={emailFound? 'found' : ''} icon={faThumbsUp}/></h3>
                        <h3 className='reaction-like'>Dislike: {blog.blog.dislike_count.length} <FontAwesomeIcon onClick={() => handleDisLike()} className={disEmailFound? 'unLike' : ''}  icon={faThumbsDown}/></h3>
                    </div>
                </div>
            </div>
        </div>
    )

    return content 
}

export default BlogDetails

