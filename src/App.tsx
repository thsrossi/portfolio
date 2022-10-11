import { useState } from 'react'
import Avatar from './assets/images/avatardev.svg'
import './App.css'
import { NavTop } from './components/navtop'


function App() {


  return (
    <div className="home">
      <NavTop />
      <div className="px-4 px-md-5 row mx-0 my-5 flex-row-reverse">
        <img className='col-12 col-md-6' src={Avatar}/>
        <div className="my-5 py-5 text-center col-12 col-md-6 px-0"> 
          <h1 className='mb-5 mx-0 text-left'>Olá, me chamo Matheus Rossi!</h1>
          <p className='text-left'>Sou desenvolvedor front end focado em React, performance e aplicações responsivas.</p>
        </div>
        
      </div>
    </div>
  )
}

export default App
