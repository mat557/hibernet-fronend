import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
// import { logIn } from '../../feature/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from './authApiSlice'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import Loader from '../../shared/Loader/Loader'


const Login = () => {
    let content
    const [email] = useAuth()
    const navigate = useNavigate()
    let [login , { isLoading , isError , isSuccess , error }] = useLoginMutation()
    const { register, handleSubmit } = useForm()

    if(isLoading){
        content = <Loader />
    }
    
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
    
    const onSubmit = async(data) => {
        const response = await login(data)
        if(response && response?.data?.refresh_token){
            localStorage.setItem('refresh_token',response.data.refresh_token)
            localStorage.setItem('consist',true)
        }
    }

    content = (
        <div className='login'>
            <div className="login-header">
                <div className="header-cont">
                    <p>Login</p>
                </div>
            </div>

            <div className='login-cont'>
                <div className='contant'>
                    <h1>welcome</h1>
                    <h2>Hibernet</h2>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        <input placeholder='Enter your email' type="text" {...register("email")} />
                        <input placeholder='Enter your password' type="password"  {...register("password")} />
                        <div className='log-link'>
                            <p>Forgot password?</p>
                            <Link to='/signin'>Don't have an account?</Link>
                        </div>
                        <button  type="submit" >Login</button>
                    </form>
                    <div className='others-link'>
                        <FontAwesomeIcon icon={faGoogle} size='xl'/>
                        <FontAwesomeIcon icon={faGithub} size='xl'/>
                    </div>
                </div>
            </div>

        </div>
    )
    return content
}

export default Login