import { useState } from 'react'
import ReactIcon from './assets/images/react.svg'
import './App.css'
import Rossinho from './assets/images/rossinho.png'
import TypeScript from './assets/images/Typescript.svg'
import Git from './assets/images/Git.png'
import { NavTop } from './components/navtop'


function App() {


  return (
    <div className="home">
      <NavTop />
      <div className="px-4 px-md-5 row mx-0 mt-4 mt-md-5 mt-lg-2 ola-mundo align-items-center">
        
        <div className=" col-12 col-md-6 px-0 d-flex align-items-start justify-content-center flex-column my-0 my-lg-5 my-md-4"> 
          <h1 className='mb-4 mb-md-5 mx-0 text-left'>Olá, me chamo <span>Matheus Rossi!</span></h1>
          <p className='text-left mx-0 p-0 '>Sou desenvolvedor front end focado em React, performance e aplicações responsivas.</p>
        </div>
        <div className='col-12 col-md-6 pr-0 pl-0 pl-md-3 linguagens-rossinho'>
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
      </div>
      <div className='projetos px-4 px-md-5 row mx-0 pt-4 pt-md-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quas fugit aperiam voluptatem sed accusantium corporis, laudantium deleniti, ratione architecto expedita. Minus voluptatibus dolores voluptas repellat quasi debitis esse velit!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, dignissimos eaque? Quo explicabo, architecto aspernatur nulla, pariatur unde quae dolorem tempora totam saepe error laudantium, optio ducimus laboriosam in voluptatum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur minima eos delectus voluptatum porro modi voluptas vitae nisi atque dolorum numquam esse saepe omnis sint molestiae, vel iste suscipit.
      </div>
    </div>
  )
}

export default App
