import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Comment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Comment = () => {
    let content

    content = (
        <div className="comment-section">
            <p>Testimonials</p>
            <div className='comments'>
                <div className="comment">
                    <div className="comment-info">
                        <h4>User 1</h4>
                        <p>Posted on: 2024-02-10</p>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quam et optio delectus ad sed.</p>
                </div>
                <div className="comment">
                    <div className="comment-info">
                        <h4>User 2</h4>
                        <p>Posted on: 2024-02-09</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam odio nulla atque sint est commodi autem itaque, porro sapiente.</p>
                </div>
                <div className="comment">
                    <div className="comment-info">
                        <h4>User 3</h4>
                        <p>Posted on: 2024-02-09</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus, quas sit odit quasi deleniti optio amet sed maiores quae!</p>
                </div>
            </div>
            <div className='cmmnt-pagination'>
                <button><FontAwesomeIcon icon={faCircleArrowLeft}  size='xl' /></button>
                <button><FontAwesomeIcon icon={faCircleArrowRight} size='xl' /></button>
            </div>
        </div>

    )

    return content
}

export default Comment