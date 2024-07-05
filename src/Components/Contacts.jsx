
import './Portfolio.css';
import './Responsive.css';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import Swal from 'sweetalert2';
export default function Contacts(){



    const callPop = () =>{
        Swal.fire("My Phone No: +918275807713");
    }
    const emailPop = () =>{
        Swal.fire("My Email: aadityathakare114@gmail.com");
    }


    return(
        <>
            <div className='contactMainContainer'>
                <div className='contactContainer'>

                    <div className='contactHeading heading'>
                       <u> CONTACT </u>
                    </div>
                    <div className='contactIconContainer'>
                        <div className='contactSubIcon'  onClick={()=>{callPop()}} ><PhoneIcon   className='contactIcon' style={{fontSize:"100px", color:"yellow"}} /> <span className='contactLabel'>Phone</span> </div>
                        <div className='contactSubIcon'><a href="https://github.com/Aadi-124" target='_blank'><GitHubIcon   className='contactIcon' style={{fontSize:"100px", color:"yellow"}} /></a> <span className='contactLabel'>GitHub</span> </div>
                        <div className='contactSubIcon' onClick={()=>{callPop()}}><MailIcon     className='contactIcon' style={{fontSize:"100px", color:"yellow"}} /> <span className='contactLabel'>Email</span> </div>
                        <div className='contactSubIcon'><a href="https://www.linkedin.com/in/aaditya1149/" target='_blank'><LinkedInIcon className='contactIcon' style={{fontSize:"100px", color:"yellow"}} /></a> <span className='contactLabel'>LinkedIn</span> </div>
                    </div>
                    <div className='contactDescription'>
                       <center> You can Contact me on my instagram and whatsapp Also!!!! </center>
                    </div>
                </div>

            </div>

        
        </>
    );
}