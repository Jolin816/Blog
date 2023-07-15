import '/Users/jolin/git/Blog/src/stylesheets/landingpage.css';
import Intro from '/Users/jolin/git/Blog/src/component/Intro.jsx';
import HomeHead from '/Users/jolin/git/Blog/src/component/HomeHead.jsx';

function LandingPage() {
    return(
        <>
            <div className='CONTAINER'>
                <HomeHead className='Head'/>
                <Intro className='Intro'/>
            </div>
        </>
    )
}

export default LandingPage