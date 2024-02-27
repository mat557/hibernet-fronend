import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import useGetScreen from '../../hooks/useGetScreen'
import { faBars,  faCircleXmark, faHome } from '@fortawesome/free-solid-svg-icons'
import { useLogoutMutation } from '../../component/Auth/authApiSlice'
import { logOut } from '../../feature/auth/authSlice'
import { useDispatch } from 'react-redux'
import useAuth from '../../hooks/useAuth'


const NavBar = ({ open , setOpen , navmenu }) => {
    let content
    const [ email ] = useAuth()
    const dispatch = useDispatch()
    const [logout , {isError,isLoading,isSuccess,error}] = useLogoutMutation()
    const [small] = useGetScreen()
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const location = useLocation()
    const handleLogOut = async() =>{
        // const logoutevent = await logout()
        // console.log(logoutevent.status)
        dispatch(logOut())
    }
    

    content = (
        <div ref={navmenu} className={ small || location?.pathname?.indexOf('/dash') !== -1  ? "navbar-holder regular" : "navbar-holder"}>
            <div className='navbar-content'>
                
                <div className='nav-text'>
                    <div>
                        <Link><FontAwesomeIcon className='icon' icon={faFacebook} /></Link>
                        <Link><FontAwesomeIcon className='icon' icon={faInstagram}/></Link>
                    </div>
                    <p onClick={() => navigate(email ? '/dash' : '/login')} className='bg-green-900 text-white name rounded'>{email ? email : 'login?'}</p>
                </div>

                <div className='nav-links'>
                    <h1 onClick={()=>navigate('/')}>Hibar-net</h1>
                    <button onClick={() => setOpen(!open)} className='ham-bur'><FontAwesomeIcon icon={open? faCircleXmark : faBars} size="2xl"/></button>
                    <ul className={open ? 'links active' : 'links'}>
                        <Link to="/" className={pathname.includes('/')? 'link' : 'link'}><FontAwesomeIcon icon={faHome} size='lg' /></Link>
                        <Link to="/courses" className={pathname.includes('/courses')? 'link current-page' : 'link'}>Courses</Link>
                        <Link to="/about" className={pathname.includes('/about')? 'link current-page' : 'link'}>About</Link>
                        <Link to="/faq" className={pathname.includes('/faq')? 'link current-page' : 'link'}>FAQ</Link>
                        <Link to="/dash" className={pathname.includes('/dash')? 'link current-page' : 'link'}>Dash</Link>
                        {email ? <button onClick={()=>handleLogOut()} className='log-btn'>Logout</button> : <Link to="/login" className={pathname.includes('login')? 'link current-page' : 'link'}>Login</Link>}
                    </ul>
                </div>

            </div>
        </div>
    )

    return content
}

export default NavBar