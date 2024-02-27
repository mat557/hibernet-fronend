import { apiSlice } from "../../../app/api/apiSlice";


export const courseApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({

        courseCount: builder.query({
            query: () => ({
                url: '/courses/count'
            })
        }),

        getSingleCourse: builder.query({
            query: (id) => ({
                url: `/courses/single/course/${id}`
            })
        }),

        getAllCourses: builder.query({
            query: () => ({
                url: '/courses/all'
            })
        }),

        updateSingleCourse: builder.mutation({
            query: ( credentials ) =>({
                url   : '/courses/update/course',
                method: 'patch',
                body  : credentials,
            })
        }),

        insertSingleCourse: builder.mutation({
            query: ( credentials ) =>({
                url   : '/courses/insert/course',
                method: 'post',
                body  : credentials,
            }),

            async onQueryStarted( credentials , {dispatch , queryFulfilled}){
                try{
                    const res = await queryFulfilled
                    dispatch(
                        courseApiSlice.util.updateQueryData('getAllCourses', undefined , (draft) => {
                            
                            const updatedCredentials = {
                                "code"              : credentials?.code,
                                "course_assignment" : credentials?.course_assignment,
                                "course_description": credentials?.course_description,
                                "course_exam"       : credentials?.course_exam,
                                "course_fee"        : credentials?.course_fee,
                                "course_nmbr"       : credentials?.course_nmbr,
                                "course_title"      : credentials?.course_title,
                                "_id"               : res?.data?.doc?.insertedId
                            }
                            draft?.courses?.push(updatedCredentials)
                        })
                    )
                }catch(err){
                    console.log(err)
                }
            }
        }),

        deleteSingleCourse: builder.mutation({
            query: ( id ) => ({
                url: `courses/delete/course/${id}`,
                method:'delete'
            }),

            async onQueryStarted( id , {dispatch , queryFulfilled}){
                try{
                    await queryFulfilled
                    dispatch(
                        courseApiSlice.util.updateQueryData( 'getAllCourses' , undefined , (draft) => {
                            console.log(JSON.stringify(draft))
                            const courses = draft?.courses?.filter((course) => course._id !== id)

                            return {courses : courses }
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
    useCourseCountQuery,
    useGetSingleCourseQuery,
    useGetAllCoursesQuery,
    useUpdateSingleCourseMutation,
    useInsertSingleCourseMutation,
    useDeleteSingleCourseMutation
} = courseApiSlice