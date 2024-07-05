import './Portfolio.css';
import './Responsive.css';
import Achievement from './Achievement';
import achievement1 from '../assets/Achievements_Photos/achievement1.jpg';
import achievement2 from '../assets/Achievements_Photos/achievement2.png';
import achievement3 from '../assets/Achievements_Photos/achievement3.png';
import achievement4 from '../assets/Achievements_Photos/achievement4.png';
export default function Achievements(){
    return (
        <>
            <div className='achievementsMainDiv'>
                <div className='achievementsSubDiv achievementsHeading'>
                    <u>ACHIEVEMENTS</u>
                </div>
                <div className='achievementsSubDiv achievementsBlock'>
                    <Achievement
                        heading="HackFusion Hackthon Certificate from SGGS"
                        description="This is a participation certificate I have received from SGGSIE&T"
                        imageurl={achievement1}
                        imagelink="https://drive.google.com/file/d/1VRpOzVVuF-Ea_De641ArTbHSgosRjhjE/view?usp=sharing"
                    />
                    <Achievement
                        heading="Hacker Rank Core Java Certificate"
                        description="This is a core java certificate I had received from Hacker Rank"
                        imageurl={achievement2}
                        imagelink="https://drive.google.com/file/d/1tdePT-9HQHMO8UMmBu1KfF8ki3tHHYyW/view?usp=drive_link"
                    />
                    <Achievement
                        heading="Offer letter from CodSoft"
                        description="This is an offer letter I had received from CodSoft"
                        imageurl={achievement3}
                        imagelink="https://drive.google.com/file/d/14QJH4UYzfaWkS5UCpWplLB_LtD732s6Z/view?usp=drive_link"
                    />
                    <Achievement
                        heading="Offer letter from Code Alpha"
                        description="This is an offer letter I had received from Code Alpha"
                        imageurl={achievement4}
                        imagelink="https://drive.google.com/file/d/1_F36LgUB5wbJcQxPVMt1YCoNYsA96kQp/view?usp=drive_link"
                    />
                </div>
            </div>
        </>
    );
}