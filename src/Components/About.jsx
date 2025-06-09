import './Portfolio.css';
import './Responsive.css';
// import 'aos/dist/aos.css';
// import Aos from 'aos';
import { useEffect } from 'react';
export default function About(){


    return(
        <>
            <div className='aboutMainContainer'>

                <div className='aboutContainer'>

                    {/* <div className='aboutHeading aboutSubContainer'data-aos="fade-left"> */}
                    <div className='aboutHeading aboutSubContainer'>
                        <u>ABOUT</u>
                    </div>
                    <div className='aboutDescription aboutSubContainer'>
                    {/* <div className='aboutDescription aboutSubContainer' data-aos="fade-right"> */}
                        <center>
                            Enthusiastic Computer Science student with a strong passion for web development. 
                            Adept at ReactJS, Spring-Boot and MongoDB. Driven to create user-friendly and 
                            visually appealing web experiences
                        </center>
                    </div>
                </div>
            </div>      
        
        </>
    );
}