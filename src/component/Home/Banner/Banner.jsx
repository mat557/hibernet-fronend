import './Banner.css'
import banner from '../../../assets/banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    let content
    content = (
        <div className='banner' >
            <div className="overlay"></div>
            <img src={banner} alt="" />
                <div className='info-box'>
                <div className='info'>
                    <h1>Physics First Paper</h1>
                    <p>All coverd</p>
                    <button>check<FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
                </div>
        </div>
    )
    return content
}

export default Banner