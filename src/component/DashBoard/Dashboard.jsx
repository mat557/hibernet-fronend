import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Dashboard = ({ sidemenu , dashOpen }) => {
    let content
    const navigate = useNavigate()
    const location = useLocation()
    

    content = (
        <div  ref={sidemenu} className='dashboard'>
            <div className='desh-content'>
                
                <div className={dashOpen ? "dash-nav-open dash-nav" : "dash-nav"}>
                    <div className='dash-nv-header'>
                        <h1>DashBoard</h1>
                        <h1>route: {location.pathname}</h1>
                    </div>

                    <ul>
                        <div className='lnk-header'>
                            <div><FontAwesomeIcon icon={faFacebook} color='black'/> Profile</div>
                            <Link to="/dash" className='lnk-header-ink'>update</Link>
                        </div>
                        <div className='lnk-header'>
                            <div><FontAwesomeIcon icon={faFacebook} color='black'/> Courses</div>
                            <Link to="course" className='lnk-header-ink'><FontAwesomeIcon icon={faArrowRightArrowLeft} className='ml-4'/>check</Link>
                            <Link to="course/add" className='lnk-header-ink'><FontAwesomeIcon icon={faArrowRightArrowLeft} className='ml-4 mt-3'/>add</Link>
                            <Link to="course/update" className='lnk-header-ink'><FontAwesomeIcon icon={faArrowRightArrowLeft} className='ml-4 mt-3'/>update</Link>
                        </div>
                        <div className='lnk-header'>
                            <div><FontAwesomeIcon icon={faFacebook} color='black'/> Users</div>
                            <Link to="users" className='lnk-header-ink'><FontAwesomeIcon icon={faArrowRightArrowLeft} className='ml-4'/>check</Link>
                        </div>
                        <div className='lnk-header'>
                            <div><FontAwesomeIcon icon={faFacebook} color='black'/> Blogs</div>
                            <Link to="blog" className='lnk-header-ink'><FontAwesomeIcon icon={faArrowRightArrowLeft} className='ml-4'/>check</Link>
                            <Link to="blog/add" className='lnk-header-ink'><FontAwesomeIcon icon={faArrowRightArrowLeft} className='ml-4 mt-3'/>add</Link>
                            <Link to="blog/update" className='lnk-header-ink'><FontAwesomeIcon icon={faArrowRightArrowLeft} className='ml-4 mt-3'/>update</Link>
                        </div>
                        <div className='lnk-header'>
                            <div><FontAwesomeIcon icon={faFacebook} color='black'/> Question</div>
                            <Link to="question" className='lnk-header-ink'><FontAwesomeIcon icon={faArrowRightArrowLeft} className='ml-4'/>check</Link>
                            <Link to="question/add" className='lnk-header-ink'><FontAwesomeIcon icon={faArrowRightArrowLeft} className='ml-4 mt-3'/>add</Link>
                            <Link to="question/update" className='lnk-header-ink'><FontAwesomeIcon icon={faArrowRightArrowLeft} className='ml-4 mt-3'/>update</Link>
                        </div>
                        <div className='lnk-header active'>
                            <div><FontAwesomeIcon icon={faFacebook} color='black'/> Comments</div>
                            <Link to="comment" className='lnk-header-ink'><FontAwesomeIcon icon={faArrowRightArrowLeft} className='ml-4'/>check</Link>
                            <Link className='lnk-header-ink'><FontAwesomeIcon icon={faArrowRightArrowLeft} className='ml-4 mt-3'/>add</Link>
                            <Link className='lnk-header-ink'><FontAwesomeIcon icon={faArrowRightArrowLeft} className='ml-4 mt-3'/>update</Link>
                        </div>
                    </ul>
                </div>

                <div className="dash-cont">
                    <Outlet />
                </div>

            </div>
        </div>
    )
    return content
}

export default Dashboard