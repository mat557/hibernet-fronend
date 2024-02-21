import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../feature/auth/authSlice"
import { apiSlice } from "./api/apiSlice"

export const store = configureStore({
    reducer:{
        auth : authSlice,
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})
