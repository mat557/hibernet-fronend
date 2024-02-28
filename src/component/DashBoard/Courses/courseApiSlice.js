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
                method: 'PATCH',
                body  : credentials,
            }),

            async onQueryStarted( credentials , {dispatch , queryFulfilled}){
                try{
                    await queryFulfilled
                    dispatch(
                        courseApiSlice.util.updateQueryData( 'getAllCourses' , undefined , (draft) => {
                            let foundedCourse = draft?.courses.find((course) => course._id === credentials.id)
                            
                            foundedCourse.code              = credentials?.code ? credentials?.code: foundedCourse.code 
                            foundedCourse.course_assignment = credentials?.course_assignment ? credentials?.course_assignment: foundedCourse.course_assignment
                            foundedCourse.course_description= credentials?.course_description? credentials?.course_description : foundedCourse.course_description
                            foundedCourse.course_exam       = credentials?.course_exam ? credentials?.course_exam : foundedCourse.course_exam 
                            foundedCourse.course_fee        = credentials?.course_fee ? credentials?.course_fee: foundedCourse.course_fee 
                            foundedCourse.course_nmbr       = credentials?.course_nmbr ? credentials?.course_nmbr: foundedCourse.course_nmbr 
                            foundedCourse.course_title      = credentials?.course_title ? credentials?.course_title: foundedCourse.course_title 
                            
                        })
                    )
                }catch(err){
                    console.log(err)
                }
            }
        }),

        insertSingleCourse: builder.mutation({
            query: ( credentials ) =>({
                url   : '/courses/insert/course',
                method: 'POST',
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
                method:'DELETE'
            }),

            async onQueryStarted( id , {dispatch , queryFulfilled}){
                try{
                    await queryFulfilled
                    dispatch(
                        courseApiSlice.util.updateQueryData( 'getAllCourses' , undefined , (draft) => {
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