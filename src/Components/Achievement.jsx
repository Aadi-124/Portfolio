
// import Aos from 'aos';
import { useEffect } from 'react';
// import 'aos/dist/aos.css';

export default function Achievement(props){

  

    return(
        <>
            <div className="achievementMainDiv">

                <div className="achievementDiv achievementInfo" >

                    {/* <div className="achievementSubDiv achievementHeading"  ><center data-aos="fade-up">{props.heading}</center></div> */}
                    <div className="achievementSubDiv achievementHeading"  ><center>{props.heading}</center></div>

                    {/* <div className="achievementSubDiv achievementDescription" data-aos="fade-left"> */}
                    <div className="achievementSubDiv achievementDescription">
                       <center>{props.description}</center>
                    </div>
                   

                </div>

                {/* <div className="achievementDiv achievementImageDiv" data-aos="fade-right"> */}
                <div className="achievementDiv achievementImageDiv">
                   <a href={props.imagelink} target="_black"> <img className='achievementImage' src={props.imageurl} alt="IMAGE1" /> </a>
                </div>

            </div>
        </>
    );
}