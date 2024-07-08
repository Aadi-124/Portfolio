

import './Portfolio.css';
import './Responsive.css';
import SlideShow from './SlideShow';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function Project(props) {

    useEffect(()=>{
        Aos.init({duration:2000});
    },[]); 

    return (
        <>


            <div className='projectMainDiv'>

                <div className="projectDiv">

                    <div className='projectSubDiv projectHeading' data-aos="fade-left">
                        <u>{props.data.heading}</u>
                    </div>

                    <div className='projectSubDiv projectDescription' data-aos="fade-right">

                        <p className='projectDesc1'>
                            {props.data.subheading}
                        </p>

                        <p className='projectDesc2'>{props.data.description}</p>
                        <p className='projectDesc3'>{props.data.subDescription}</p>


                    </div>

                    <button data-aos="fade-up" href={props.data.link} class="button-36"><a href={props.data.link} target="_blank" >Visite Website </a></button>
                    <br />
                    <br />
                    <br />
                </div>
                        <div className='projectDiv projectSlideShowContainer' data-aos="fade-left">

                        <SlideShow slides={props.data.images}/>
                        </div>

                {/* <div className='projectDiv projectImages'>
                    <img className='projectImage' src={img1} alt="Image1" />
                    <img className='projectImage' src={img2} alt="Image2" />
                    <img className='projectImage' src={img3} alt="Image3" />
                    <img className='projectImage' src={img4} alt="Image4" />
                </div> */}


                <div className='slideShowContainer'>
                    <div className='slideShowSubDiv'>
                    </div>
                </div>

            </div>

        </>
    );
}