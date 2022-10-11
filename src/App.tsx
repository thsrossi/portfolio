import { useState } from 'react'
import Avatar from './assets/images/avatardev.svg'
import Rossinho from './assets/images/rossinho.png'
import './App.css'
import { NavTop } from './components/navtop'


function App() {


  return (
    <div className="home">
      <NavTop />
      <div className="px-4 px-md-5 row mx-0 mt-4 mt-md-5 ola-mundo">
        
        <div className="my-md-5 mt-3 mb-3 py-0 py-md-5 text-center col-12 col-md-6 px-0"> 
          <h1 className='mb-4 mb-md-5 mx-0 text-left'>Olá, me chamo Matheus Rossi!</h1>
          <p className='text-left'>Sou desenvolvedor front end focado em React, performance e aplicações responsivas.</p>
        </div>
        <img className='col-12 col-md-6 text-right' src={Rossinho}/>
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
