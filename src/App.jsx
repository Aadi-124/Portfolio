import './App.css';
import NavigationBar from './Components/NavigationBar';
import Profile from './Components/Profile';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Projects from './Components/Projects';
import SlideShow from './Components/SlideShow';
import Achievements from './Components/Achievements';
import Footer from './Components/Footer';

function App() {
  
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

        <Footer/>
    </> 
  )
}

export default App
