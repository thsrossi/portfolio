import { useState, useEffect, useRef  } from 'react'
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

  const [currentNav, setCurrentNav] = useState<string | null>('main');
  const navRef = useRef<HTMLUListElement>(null);

  const sections = document.querySelectorAll("section");
  window.onscroll = () => {
    const navLi = document.querySelectorAll("nav ul a");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      console.log(section)
      if (scrollY >= sectionTop - 100) {
        setCurrentNav(section.getAttribute("id"));
        console.log(currentNav)
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (currentNav && li.id.includes(currentNav)) {
        li.classList.add("active");
      }
    });
  };

  return (
    <div className="home">
      <NavTop />
      <WhatsAppButton />
      <MainSection />
      <ExperienceSection />
    </div>
  )
}

export default App
