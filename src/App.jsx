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
    <Navbar />
    <section id="inicio">
      <WelcomeText />
    </section>
    <section id="sobre">
      <AbouteMe />
    </section>
    <section id="formacao">
      <Formation />
    </section>
    <section id="experiencia">
      <Experience />
    </section>
    <section id="habilidades">
      <Habilities />
    </section>
    <section id="projetos">
      <Projects />
    </section>
    </>
  )
}

export default App
