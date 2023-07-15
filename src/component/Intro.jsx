import '/Users/jolin/git/Blog/src/stylesheets/landingpage.css'

function Intro() {
    return(
        <>
            <div className='INTRO_CONTAINER'>
                <img 
                    src='src/assets/img/profile_pic.png'
                    className='profile_pic'
                />
                <h1 className='hello'>Hey! It's Jo</h1>
                <a href="https://github.com/Jolin816" className='link'>yuxuan/github</a>
                <a href="https://www.linkedin.com/in/yuxuan-xie-097325262/" className='link'>yuxuan/linkedin</a>
                <a href="mailto:j5xie@uwaterloo.ca" className='link'>yuxuan/email</a>
                <h4 className='foot'>© 2023 yuxuan's Blog</h4>
            </div>
        </>
    )
}

export default Intro