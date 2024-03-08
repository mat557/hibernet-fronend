import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './OverView.css'
import { faArrowRight , faCircleQuestion , faPalette, faPenNib } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const OverView = () => {
    let content
    const navigate = useNavigate()

    content = (
        <div className='overview-holder'>
            <div className="overview">
                <div className='course-overview-title'>
                    <p className='course-overview-title-tag'>Website Overview</p>
                </div>
                <div className='overview-details'>
                    <div className='overview-detail'>
                        <FontAwesomeIcon className='icon-overview' icon={faCircleQuestion}/>
                        <div className='overview-detail-title'>
                            <h1>Ask Your Questions</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ex sed dolores
                            </p>
                            <button onClick={() => navigate('/qna')}><FontAwesomeIcon icon={faArrowRight}/></button>
                        </div>
                    </div>
                    <div className='overview-detail'>
                        <FontAwesomeIcon className='icon-overview' icon={faPalette}/>
                        <div className='overview-detail-title'>
                            <h1>Your Desired Course</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ex sed dolores
                            </p>
                            <button onClick={() => navigate('/courses')}><FontAwesomeIcon icon={faArrowRight}/></button>
                        </div>
                    </div>
                    <div className='overview-detail'>
                        <FontAwesomeIcon className='icon-overview' icon={faPenNib}/>
                        <div className='overview-detail-title'>
                            <h1>Read Blogs</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ex sed dolores
                            </p>
                            <button onClick={() => navigate('/blog')}><FontAwesomeIcon icon={faArrowRight}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return content 
}

export default OverView