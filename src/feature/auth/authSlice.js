import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user : {},
    token: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setState: (state,action) =>{
            state.token = action.payload
        },
        logOut: (state) =>{
            localStorage.removeItem('refresh_token')
            state.user = ''
            state.token = ''
        }
    }
})



export const { setState , logOut , signUp} = authSlice.actions
export default authSlice.reducer