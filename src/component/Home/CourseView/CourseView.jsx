import './CourseView.css'
import { Link } from "react-router-dom"
import img1 from '../../../assets/note3.jpg'
import img2 from '../../../assets/exams.jpg'
import img3 from '../../../assets/note2.jpg'
import img4 from '../../../assets/note1.jpg'

const CourseView = () => {
    let content


    content = (
        <div className='courseview-holder'>
            <div className="course-overview-page">
                <div className='course-overview-title'>
                    <p className='course-overview-title-tag'>Course Standerd</p>
                    <Link to='/courses' className='link-header'>check all of our courses </Link>
                </div>


                <div className='home-overview-content'>

                    <div className='home-overview'>
                        <img className='home-overview-img' src={img1} alt="" />
                        <div className='overview-text'>
                            <h2>Following NCTB Textbook</h2>
                            <h3>The textbook serves as our primary guideline, which we strictly adhere to.</h3>
                        </div>
                    </div>


                    <div className='home-overview'>
                        <img className='home-overview-img' src={img2} alt="" />
                        <div className='overview-text'>
                            <h2>Exams After Each Class</h2>
                            <h3>An exam is necessary to assess someone's understanding of the topic.</h3>
                        </div>
                    </div>
                    

                    <div className='home-overview'>
                        <img className='home-overview-img' src={img3} alt="" />
                        <div className='overview-text'>
                            <h2>Assignments</h2>
                            <h3>All of our courses have assignment. We take assignment after every three classes has finished.</h3>
                        </div>
                    </div>
                    

                    <div className='home-overview'>
                        <img className='home-overview-img' src={img4} alt="" />
                        <div className='overview-text'>
                            <h2>Provide Notes for Every Topic</h2>
                            <h3>To gain a strong understanding of the covered topics, we provide notes organized by chapters and topics.</h3>
                            {/* <h3>This ensures efficient studying.</h3> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

    return content
}

export default CourseView

