import './Stat.css'

const Stat = () => {
    let content

    
    content = (
        <div className='stat-holder'>
            <div className='stat-content'>
                <div className='stats'>
                    <div className="stat">
                        <p>vast collection</p>
                        <h1>7+ <span>courses</span></h1>
                        <h2>Following current curriculum</h2>
                    </div>
                    <div className="stat">
                        <p>More than</p>
                        <h1>30 <span>questions</span></h1>
                        <h2>Asked every week</h2>
                    </div>
                    <div className="stat">
                        <p>Read more then</p>
                        <h1>50+ <span>blogs</span></h1>
                        <h2>To enrich your knowledge</h2>
                    </div>
                </div>
            </div>
        </div>
    )
    return content
}

export default Stat