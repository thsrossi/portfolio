import { useState } from 'react'
import ReactIcon from './assets/images/react.svg'
import './App.css'
import Rossinho from './assets/images/rossinho.png'
import TypeScript from './assets/images/Typescript.svg'
import Git from './assets/images/Git.png'
import { NavTop } from './components/NavTop/navtop'
import WhatsAppButton from './components/WhatsAppButton/WhatsappButton'
import MainSection from './components/Sections/MainSection/MainSection'



function App() {


  return (
    <div className="home">
      <NavTop />
      <WhatsAppButton/>
      <MainSection/>
      {/* <main className="px-2 px-md-5 row mx-5 mt-4 mt-md-5 mt-lg-2 ola-mundo align-items-end justify-content-between">
        
        <div className=" col-12 col-lg-6 px-0 d-flex align-items-start justify-content-center flex-column my-auto"> 
          <h1 className='mb-2 mb-lg-4 mx-0 text-left'>Olá, me chamo <span>Matheus Rossi!</span></h1>
          <p className='text-justify mx-0 p-0 '>
          Sou desenvolvedor Front-End focado em React, performance e aplicações responsivas, 
          com ampla experiência em tecnologias como TypeScript, HTML, CSS, JavaScript, Material-UI e Git. 
          Atualmente, trabalho como Desenvolvedor Front-end na MaxCore Informática, onde utilizo ReactJS 
          com TypeScript e tecnologias suplementares como Git, Chakra UI, Material UI, Bootstrap.
          </p>
        </div>
        <div className='col-12 col-lg-5 pr-0 pl-0 pl-md-3 linguagens-rossinho'>
          <div className="background-ball">
          </div>
          <img className="rossinho" src={Rossinho}/> 
          <div className='linguagens react'>
            <img className="react-img" src={ReactIcon}/>
          </div>
          <div className='linguagens typescript'>
            <img className="ts-img" src={TypeScript}/>
          </div>
          <div className='linguagens git'>
            <img className="git-img" src={Git}/>
          </div>
        </div> 
      </main> */}
      <div className='projetos px-4 px-md-5 row mx-0 pt-4 pt-md-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quas fugit aperiam voluptatem sed accusantium corporis, laudantium deleniti, ratione architecto expedita. Minus voluptatibus dolores voluptas repellat quasi debitis esse velit!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, dignissimos eaque? Quo explicabo, architecto aspernatur nulla, pariatur unde quae dolorem tempora totam saepe error laudantium, optio ducimus laboriosam in voluptatum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur minima eos delectus voluptatum porro modi voluptas vitae nisi atque dolorum numquam esse saepe omnis sint molestiae, vel iste suscipit.
      </div>
    </div>
  )
}

export default App
