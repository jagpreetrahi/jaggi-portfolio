
import './App.css'
import ShowArticles from './Component/Article'
import BottomBar from './Component/Bottombar'
import Education from './Component/Education'
import Experience from './Component/Experience'
import HeroBar from './Component/HeroBar'
import NavigationBar from './Component/NavigationBar'
import Project from './Component/Project'
import SkillSection from './Component/Skill-section'

function App() {
  

  return (
    <>
        <NavigationBar/>
        
        <HeroBar/>
        <Education/>
        <Experience/>
        <Project/>
        <ShowArticles/>
        <SkillSection/>
        <BottomBar/>
    </>
  )
}

export default App
