
import About from './pages/About.jsx';
import Certifications from './pages/Certifications.jsx';
import Header from './pages/Header.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import SocialIcons from './pages/SocialIcons.jsx';
import Education from './pages/Education.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <SocialIcons/>
      <Projects/>
      <Skills/>
      <Certifications/>
      <Education/>
      <Contact/>
      <footer className='footer'>
      © 2024 Wajahat_Hussain
      </footer>
    </>
    
  );
}

export default App;
