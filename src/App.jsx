import Navbar from './components/navbar/Navbar'
import './App.css'
import WelcomeText from './components/home_section/WelcomeText'
import AbouteMe from './components/AboutMe/AbouteMe'
import Formation from './components/Formation/Formation'
import Experience from './components/Experience/Experience'
import Habilities from './components/Habilities/Habilities'
import Projects from './components/Projects/Projects'

function App() {
 

  return (
    <>
    <Navbar/>
    <WelcomeText/>
    <AbouteMe/>
    <Formation/>
    <Experience/>
    <Habilities/>
    <Projects/>
    </>
  )
}

export default App
