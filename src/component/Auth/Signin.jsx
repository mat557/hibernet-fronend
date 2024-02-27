import { Link, useNavigate } from 'react-router-dom'
import './Signin.css'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { signUp } from '../../feature/auth/authSlice'
import { useEffect } from 'react'
import { useSignupMutation } from './authApiSlice'
import useAuth from '../../hooks/useAuth'
import Loader from '../../shared/Loader/Loader'
import toast from 'react-hot-toast'


const Signin = () => {
    let content
    const [ email ] = useAuth()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    let [ signup , { isLoading , isError , isSuccess , error }] = useSignupMutation()
    
    
    useEffect(()=>{
        if(email || isSuccess || localStorage.getItem('refresh_token')){
            navigate('/')
        }
    },[email,isSuccess,localStorage.getItem('refresh_token')])

    useEffect(()=>{
        if(isError && error.status === 400){
            toast.error(error.data.message)
            error = ''
        }
    },[isError,error,isSuccess])

    if(isLoading){
        return <Loader />
    }


    const onSubmit = async(data) => {
        const response = await signup(data)
        if(response && response?.data?.refresh_token){
            localStorage.setItem('refresh_token',response.data.refresh_token)
            localStorage.setItem('consist',true)
        }
    }
    
    content = (
        <div className='signin'>
            <div className="signin-header">
                <div className="signin-cont">
                    <p>Signin</p>
                </div>
            </div>

            <div className='login-cont'>
                <div className='contant'>
                    <h1>welcome</h1>
                    <h2>Hibernet</h2>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        <input placeholder='First name' type="text"  {...register("firstname")}/>
                        <input placeholder='number' type='number'   {...register("number")}/>
                        <input placeholder='Enter your email' type="email"   {...register("email")}/>
                        <input placeholder='Enter your password' type="password"   {...register("password")}/>
                        <div className='log-link'>
                            <p>Forgot password?</p>
                            <Link to='/login'>Already have an account?</Link>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
    return content
}

export default Signin