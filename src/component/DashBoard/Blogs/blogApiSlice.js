import { apiSlice } from "../../../app/api/apiSlice";




export const blogApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        blogCount: builder.query({
            query: () => ({
                url: '/blogs/count'
            })
        }),
    
        getSingleBlog: builder.query({
            query: (id) => ({
                url: `/blogs/single/blog/${id}`
            })
        }),
    
        getAllBlogs: builder.query({
            query: () => ({
                url: '/blogs/all'
            })
        }),

        updateSingleBlog: builder.mutation({
            query: ( credentials ) =>({
                url   : '/blogs/update/blog',
                method: 'PATCH',
                body  : credentials,
            }),

            async onQueryStarted( credentials , {dispatch , queryFulfilled}){
                try{
                    await queryFulfilled
                    dispatch(
                        blogApiSlice.util.updateQueryData( 'getAllBlogs' , undefined , (draft) => {
                            let foundedCourse = draft?.blogs?.find((blog) => blog._id === credentials.id)
                            
                            
                            foundedCourse.blog_author = credentials?.blog_author ?  credentials?.blog_author : foundedCourse.blog_author 
                            foundedCourse.author_email= credentials?.author_email ? credentials?.author_email: foundedCourse.author_email 
                            foundedCourse.blog_content= credentials?.blog_content ? credentials?.blog_content: foundedCourse.blog_content 
                            foundedCourse.blog_tag    = credentials?.blog_tag ?     credentials?.blog_tag    : foundedCourse.blog_tag 
                            foundedCourse.blog_title  = credentials?.blog_title ?   credentials?.blog_title  : foundedCourse.blog_title 
                            
                        })
                    )
                }catch(err){
                    console.log(err)
                }
            }
        }),

        insertSingleBlog: builder.mutation({
            query: ( credentials ) =>({
                url   : '/blogs/insert/blog',
                method: 'POST',
                body  : credentials,
            }),

            async onQueryStarted( credentials , {dispatch , queryFulfilled}){
                try{
                    const res = await queryFulfilled
                    console.log(res)
                    console.log(credentials)
                    dispatch(
                        blogApiSlice.util.updateQueryData('getAllBlogs' , undefined , (draft) => {
                            console.log(draft)
                            console.log(JSON.stringify(draft.blogs))
                            const addedBlog = {
                                _id: res?.data?.doc?.insertedId,
                                blog_title   : credentials.blog_title,
                                blog_author  : credentials.blog_author,
                                author_email : credentials.author_email,
                                blog_content : credentials.blog_content,
                                blog_tag     : credentials.blog_tag,
                                postedAt     : res?.data?.doc?.postedAt,
                                like_count   : [],
                                dislike_count: [],
                                update_count : 0,
                            }

                            draft?.blogs?.push(addedBlog)
                        })
                    )
                }catch(err){
                    console.log(err)
                }
            }
        }),

        deleteSingleBlog: builder.mutation({
            query: ( id ) => ({
                url: `blogs/delete/blog/${id}`,
                method:'DELETE'
            }),

            async onQueryStarted( id , {dispatch , queryFulfilled}){
                try{
                    await queryFulfilled
                    dispatch(
                        blogApiSlice.util.updateQueryData( 'getAllBlogs' , undefined , (draft) => {
                            const updatedList = draft?.blogs.filter((blog) => blog._id !== id)
                            return { blogs : updatedList }
                        })
                    )
                }catch(err){
                    console.log(err)
                }
            }
        }),


        likeBlog: builder.mutation({
            query: ( credentials ) => ({
                url: `blogs/like/blog`,
                method:'post',
                body: credentials
            }),
            
            async onQueryStarted( credentials , {dispatch , queryFulfilled}){
                try{
                    const res = await queryFulfilled
                    dispatch(
                        blogApiSlice.util.updateQueryData( 'getSingleBlog' , credentials.id , (draft) => {
                            if( res?.data?.target === 0 ) {
                                draft?.blog?.like_count.push(credentials.email)
                                const index = draft?.blog?.dislike_count.indexOf(credentials.email)
                                if(index > -1){
                                    draft?.blog?.dislike_count.splice(index,1)
                                }
                            }
                            if( res?.data?.target === 1 ) {
                                const index = draft?.blog?.like_count.indexOf(credentials.email)
                                if(index > -1){
                                    draft?.blog?.like_count.splice(index,1)
                                }
                            }
                        })
                    )
                }catch(err){
                    console.log(err)
                }
            }
        
        }),



        disLikeBlog: builder.mutation({
            query: ( credentials ) => ({
                url: `blogs/dislike/blog`,
                method:'post',
                body: credentials
            }),
            
            async onQueryStarted( credentials , {dispatch , queryFulfilled}){
                try{
                    const res = await queryFulfilled
                    dispatch(
                        blogApiSlice.util.updateQueryData( 'getSingleBlog' , credentials.id , (draft) => {
                            if( res?.data?.target === 0 ) {
                                draft?.blog?.dislike_count.push(credentials.email)
                                const index = draft?.blog?.like_count.indexOf(credentials.email)
                                if(index > -1){
                                    draft?.blog?.like_count.splice(index,1)
                                }
                            }
                            if( res?.data?.target === 1 ) {
                                const index = draft?.blog?.dislike_count.indexOf(credentials.email)
                                if(index > -1){
                                    draft?.blog?.dislike_count.splice(index,1)
                                }
                            }
                        })
                    )
                }catch(err){
                    console.log(err)
                }
            }
        
        }),


    }) 
})

export const {
    useBlogCountQuery,
    useGetSingleBlogQuery,
    useGetAllBlogsQuery,
    useUpdateSingleBlogMutation,
    useInsertSingleBlogMutation,
    useDeleteSingleBlogMutation,
    useLikeBlogMutation,
    useDisLikeBlogMutation
} = blogApiSlice