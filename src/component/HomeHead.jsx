import '/Users/jolin/git/Blog/src/stylesheets/landingpage.css'
import { useNavigate } from "react-router-dom";

function HomeHead() {
    const navigate = useNavigate();

    return (
        <>
            <div className='HEAD_CONTAINER'>
                <div className='ICON_CONTAINER'>
                    <button className='head' onClick={() => navigate("/")}>
                        HOME
                    </button>
                </div>
                <div className='ICON_CONTAINER'>
                    <button className='head' onClick={() => navigate("/me")}>
                        ME
                    </button>
                </div>
                <div className='ICON_CONTAINER'>
                    <button className='head' onClick={() => navigate("/projects")}>
                        PROJECTS
                    </button>
                </div>
                <div className='ICON_CONTAINER'>
                    <button className='head' onClick={() => navigate("/gallery")}>
                        GALLERY
                    </button>
                </div>
            </div>
        </>
    );
}

export default HomeHead;