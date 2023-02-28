import { useState } from 'react'
import ReactIcon from './assets/images/react.svg'
import './App.css'
import Rossinho from './assets/images/rossinho.png'
import TypeScript from './assets/images/Typescript.svg'
import Git from './assets/images/Git.png'
import { NavTop } from './components/NavTop/navtop'
import WhatsAppButton from './components/WhatsAppButton/WhatsappButton'
import MainSection from './components/Sections/MainSection/MainSection'
import ExperienceSection from './components/Sections/ExperienceSection/ExperienceSection'



function App() {


  return (
    <div className="home">
      <NavTop />
      <WhatsAppButton/>
      <MainSection/>
      <ExperienceSection/>
    </div>
  )
}

export default App
