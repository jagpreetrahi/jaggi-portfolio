
import './App.css'
import ShowArticles from './Component/Article'
import BottomBar from './Component/Bottombar'
import Contact from './Component/contact'
import Education from './Component/Education'
import Experience from './Component/Experience'
import HeroBar from './Component/HeroBar'
import NavigationBar from './Component/NavigationBar'
import Project from './Component/Project'
import SkillSection from './Component/Skill-section'

function App() {
  

  return (
    <div className='app-container' id='animated-border'>
        <NavigationBar/>
        <HeroBar/>
        <Education/>
        <Experience/>
        <Project/>
        <ShowArticles/>
        <SkillSection/>
        <Contact/>
        <BottomBar/>
    </div>
  )
}

export default App
