import React, { useEffect, useState } from 'react'
import useConsistant from '../../hooks/useConsistant'
import useAuth from '../../hooks/useAuth'
import { useConsistMutation } from './authApiSlice'
import { Outlet } from 'react-router-dom'
import { setState } from '../../feature/auth/authSlice'
import { useDispatch } from 'react-redux'
import Loader from '../../shared/Loader/Loader'

const ConsitantLogIn = () => {
    let content
    const [email] = useAuth()
    const dispatch = useDispatch()
    const [consistant] = useConsistant()
    const [currentSuccess,setCurrentSuccess] = useState(false)
    const [consist,{isUninitialized,isError,isLoading,isSuccess,error}] = useConsistMutation()
    const token = localStorage.getItem('refresh_token')

    useEffect(()=>{
        if(error && error.status === 400){
            localStorage.removeItem('refresh_token')
        }
    },[error])


    useEffect(()=>{
        if(token){
            const getRefreshToken = async() =>{
                try{
                    const respose = await consist(token)
                    dispatch(setState(respose?.data?.access_token))
                    setCurrentSuccess(true)
                }catch(err){
                    // console.log('err',err)
                }
            }
            if(consistant == true && !email) getRefreshToken()
        }
    },[token,consistant])
    
    
    if(token && email){
        content = <Outlet />
    }else if(token && !email){
        content = <Loader />
    }else if(!token && !email){
        content = <Outlet />
    }else if(error){
        content = <p>Login please</p>
    }

    // if(!token){
    //     content =<Outlet />
    // }else if(!consistant){
    //     content = <Outlet />
    // }else if(isLoading){
    //     content = <p>Loading...</p>
    // }else if(currentSuccess && isSuccess){
    //     content = <Outlet />
    // }else if(isError){
    //     content = <p>
    //         Error
    //     </p>
    // }else if(token && isUninitialized){
    //     content = <Outlet />
    // }else if(consistant && !email){
    //     content = <p>Loading</p>
    // }
  
    return content
}

export default ConsitantLogIn