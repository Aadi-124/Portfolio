

import profile from '../assets/profilepic.png';
import './Responsive.css';


export default function Profile() {
    return (
        <>
            <div className='mainDiv'>

                <div className='profileMainDiv'>
                    <div className='profilepicDiv' ><center>
                        <img src={profile} alt="profile picture" className='profilepic glowing-circle' />
                        <p className='profileName'><u style={{ "color": "#41bcf0" }}>AADITYA</u> <u style={{ "color": "yellow" }}>THAKARE</u></p></center>
                    </div>
                    
                    <div className='profileDescription'>

                        <p>Hey! I am Aaditya Thakare A Full Stack JAVA Developer!</p>
                        <div className='btnResume'>
                        <a href="https://drive.google.com/file/d/1_mDldqPUiLEBEIE-685Wm7ngOzfCCG4Y/view?usp=drive_link" target='_blank'><button class="glow-on-hover" type="button">RESUME</button></a>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}







