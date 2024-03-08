import './BLogView.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBookmark, faFile, faGraduationCap, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const BLogView = () => {
    let content

    content = (
        <div className='blogview-holder'>
            <div className="course-overview-page">
                <div className='course-overview-title'>
                    <p className='course-overview-title-tag'>Important features</p>
                    <Link className='course-overview-link' href="">check your classes</Link>
                </div>


                <div className='home-overview-content'>

                    <div className='home-overview'>
                        <FontAwesomeIcon className='home-overview-icon' icon={faBook}/>
                        <div className='overview-text'>
                            <h2>Online Classes</h2>
                            <h3>The textbook serves as our primary guideline, which we strictly adhere to. Our courses are meticulously designed to align with the NCTB syllabus.</h3>
                        </div>
                    </div>
                    

                    <div className='home-overview'>
                        <FontAwesomeIcon className='home-overview-icon' icon={faPenToSquare}/>
                        <div className='overview-text'>
                            <h2>Online Exams</h2>
                            <h3>An exam is necessary to assess someone's understanding of the topic. Our top priority is to provide high-quality standardized questions.</h3>
                        </div>
                    </div>
                    

                    <div className='home-overview'>
                        <FontAwesomeIcon className='home-overview-icon' icon={faFile}/>
                        <div className='overview-text'>
                            <h2>Combined Leaderboard</h2>
                            <h3>All of our courses have assignment. We take assignment after every three classes has finished.</h3>

                        </div>
                    </div>
                    

                    <div className='home-overview'>
                        <FontAwesomeIcon className='home-overview-icon' icon={faBookmark}/>
                        <div className='overview-text'>
                            <h2>Life time course excess</h2>
                            <h3>To gain a strong understanding of the covered topics, we provide notes organized by chapters and topics.</h3>

                        </div>
                    </div>
                    

                    
                </div>

            </div>
        </div>
    )

    return content 
}

export default BLogView