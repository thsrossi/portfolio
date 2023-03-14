import './App.css'
import { NavTop } from './components/NavTop/navtop'
import WhatsAppButton from './components/WhatsAppButton/WhatsappButton'
import MainSection from './components/Sections/MainSection/MainSection'
import ExperienceSection from './components/Sections/ExperienceSection/ExperienceSection'
import Project from './components/Sections/Project/Project'

function App() {
  return (
    <div className="home">
      <NavTop/>
      <WhatsAppButton />
      <MainSection />
      <ExperienceSection />
      <Project/>
    </div>
  )
}

export default App
