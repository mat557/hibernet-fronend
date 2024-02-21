import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3500'
        // baseUrl: 'https://hibernat-backend.vercel.app/'
    }),
    credentials: 'include',
    
    endpoints: builder => ({})
}) 


// const baseQueryWithReauth = async(args,api,extraOptions) =>{
//     console.log(args)
//     console.log(api)
//     console.log(extraOptions)

//     let result  = await baseQuery(args,api,extraOptions)
// }prepareHeaders: (headers, { getState }) => {
//     const token = getState().token
//     console.log(token)
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`)
//     }

//     return headers
// },