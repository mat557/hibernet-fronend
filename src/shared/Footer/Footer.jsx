import './Footer.css'

const Footer = () => {
    let content


    content = (
        <footer className="footer">
            <div className="footer-content">
                <h3>Contact Us</h3>
                <p>Email: info@example.com</p>
                <p>Phone: 123-456-7890</p>
            </div>
            <div className="footer-social">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
        </footer>
    )
    return content
}

export default Footer