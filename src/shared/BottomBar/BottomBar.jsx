import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faEnvelope, faMessage } from '@fortawesome/free-regular-svg-icons'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import './BottomBar.css'

// feed , blog , contact(chat)

const BottomBar = ({dashOpen,setDashOpen}) => {
    let content
    const [show,setShow] = useState(true)
    const location = useLocation()



    useEffect(()=>{
        if(location?.pathname.indexOf('/dash') !== -1){
            setShow(true)
        }else{
            setShow(false)
        }
    },[show,location])
    
    
    content = (
        <div className="bottom-nav">
            <div className="content">
                {!show && <Link to='/blog' className='short-link'><FontAwesomeIcon className='short-link-icon' icon={faEnvelope}/></Link>}
                {!show && <Link to='/qna'className='short-link'><FontAwesomeIcon className='short-link-icon' icon={faCircleQuestion}/></Link>}
                {!show && <Link to='/contact' className='short-link'><FontAwesomeIcon className='short-link-icon' icon={faMessage}/></Link>}
                {show && <Link className='short-link' onClick={()=> setDashOpen(!dashOpen)}><FontAwesomeIcon className='short-link-icon' icon={dashOpen ? faArrowAltCircleLeft : faArrowAltCircleRight}/></Link>}
            </div>
        </div>
    )

    return content
}

export default BottomBar



{/* <div className={show ? "bottom-nav" : 'show'}>
<div className="content">
    {location?.pathname !== '/dash' && <Link to='/blog' className='short-link'><FontAwesomeIcon className='short-link-icon' icon={faEnvelope}/></Link>}
    {location?.pathname !== '/dash' && <Link to='/qna'className='short-link'><FontAwesomeIcon className='short-link-icon' icon={faCircleQuestion}/></Link>}
    {location?.pathname !== '/dash' && <Link to='/contact' className='short-link'><FontAwesomeIcon className='short-link-icon' icon={faMessage}/></Link>}
    {location?.pathname === '/dash' && <Link className='short-link' onClick={()=> setDashOpen(!dashOpen)}><FontAwesomeIcon className='short-link-icon' icon={dashOpen ? faArrowAltCircleLeft : faArrowAltCircleRight}/></Link>}
</div>
</div> */}