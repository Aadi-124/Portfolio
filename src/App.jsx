import './App.css';
import NavigationBar from './Components/NavigationBar';
import Profile from './Components/Profile';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Projects from './Components/Projects';
import SlideShow from './Components/SlideShow';
import Achievements from './Components/Achievements';
import Footer from './Components/Footer';
// import Aos from 'aos';
import { useEffect } from 'react';
function App() {

  // useEffect(()=>{
  //   Aos.init({duration:2000});
  // },[]);
  
  return (
    <>
        <NavigationBar/>
        <div id="ProfileSection">
        <Profile/>
        </div>
        <div id="AboutSection">
        <About/>
        </div>
        <div id="ContactsSection">
        <Contacts/>
        </div>
        <div id="ProjectsSection">
        <Projects/>
        </div>
        <div id="AchievementsSection">
        <Achievements/>
        </div>
        {/* <div data-aos="fade-left"> */}
        <div>
        <Footer/>
        </div>
    </> 
  )
}

export default App
