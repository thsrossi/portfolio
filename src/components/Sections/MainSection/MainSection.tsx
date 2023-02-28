import ReactIcon from '../../../assets/images/react.svg'
import Rossinho from '../../../assets/images/rossinho.png'
import TypeScript from '../../../assets/images/Typescript.svg'
import Git from '../../../assets/images/Git.png'
import style from './MainSection.module.css'
import ContactButton from '../../ContactButton/ContactButton'

export default function MainSection(){
    return(
        <main className="px-2 px-md-5 row mx-5 mt-4 mt-md-5 mt-lg-2 align-items-end justify-content-between">
        
        <div className=" col-12 col-lg-6 px-0 d-flex align-items-start justify-content-center flex-column my-auto"> 
          <h1 className='mb-2 mb-lg-4 mx-0 text-left'>Olá, me chamo <span>Matheus Rossi!</span></h1>
          <p className='text-justify mx-0 p-0 '>
          Sou desenvolvedor Front-End focado em React, performance e aplicações responsivas, 
          com ampla experiência em tecnologias como TypeScript, HTML, CSS, JavaScript, Material-UI e Git. 
          Atualmente, trabalho como Desenvolvedor Front-end na MaxCore Informática, onde utilizo ReactJS 
          com TypeScript e tecnologias suplementares como Git, Chakra UI, Material UI, Bootstrap.
          </p>
          <ContactButton/>
        </div>
        <div className='col-12 col-lg-5 pr-0 pl-0 pl-md-3'>
          <div className={style.backgroundBall}>
          </div>
          <img className={style.rossinho} src={Rossinho}/> 
          <div className={`${style.linguagens} ${style.react}`}>
            <img className={style.reactImg} src={ReactIcon}/>
          </div>
          <div className={`${style.linguagens} ${style.typescript}`}>
            <img className={style.tsImg} src={TypeScript}/>
          </div>
          <div className={`${style.linguagens} ${style.git}`}>
            <img className={style.gitImg} src={Git}/>
          </div>
        </div> 
      </main>
    )
}