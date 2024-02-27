import { apiSlice } from "../../app/api/apiSlice";


export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({

        login: builder.mutation({
            query: ( credentials ) =>({
                url   : '/user/login',
                method: 'post',
                body  : credentials,
            })
        }),

        signup: builder.mutation({
            query: ( credentials ) =>({
                url   : '/user/signup',
                method: 'post',
                body  : credentials,
            })
        }),

        logout: builder.mutation({
            query: () =>({
                url   : '/user/logout',
                method: 'post',
                // body  : credentials,
            })
        }),

        getUsers: builder.query({
            query:() =>({
                url: '/user/all'
            })
        }),


        consist:builder.mutation({
            query: (token) =>({
                url   : `/user/consist/${token}`,
                method: 'get',
            })
        })

        
    })
}) 

export const {
    useLoginMutation,
    useSignupMutation,
    useLogoutMutation,
    useGetUsersQuery,
    useConsistMutation
} = authApiSlice




// import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react"


// export const apiSlice = createApi({
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'http://localhost:3500'
//         // baseUrl: 'https://hibernat-backend.vercel.app/'
//     }),
//     credentials: 'include',
//     prepareHeaders: (headers, { getState }) => {
//         const token = getState().token
//         console.log(token)
//         if (token) {
//           headers.set('authorization', `Bearer ${token}`)
//         }
    
//         return headers
//     },
//     endpoints: builder => ({})
// }) 

