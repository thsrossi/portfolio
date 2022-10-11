import React, { useEffect, useState } from "react";
import "../styles/navtop.css"

export function NavTop(){
    const [navItemsActive, setNavItemsActive] = useState<boolean>(false)
    // let scrollY = '';

    useEffect(()=>{
        if(navItemsActive){
            console.log(window.scrollY);
            document.body.style.top = `-${window?.scrollY}px`
            document.body.style.position = "fixed";
            
            
        }
        else{
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    },[navItemsActive])

    return(
        <div className={
            `sticky-top navtop d-flex justify-content-between py-3 align-items-md-center
            align-items-start px-4 px-md-5
            `}>
            <div className="matheus d-flex flex-row align-items-center">
                <h3 className="mb-0"><span>Matheus</span> Rossi</h3>
                
            </div>
            <nav className="d-md-block d-flex justify-content-center flex-column align-items-center">
            <button className={`d-md-none text-center`} onClick={()=>setNavItemsActive(!navItemsActive)}>

                {navItemsActive ? 
                <i className="fa fa-times fa-2xl mt-3"></i>
                : <i className="fa fa-bars fa-xl mt-3"></i>  
                }
            </button>
            <ul className={`navtop-items d-md-flex align-items-md-center mb-md-0 d-flex px-4 px-md-0 mt-0 flex-row
            ${navItemsActive ? 
            'active' : 
            ''
            }`}>
                <a className="my-0 mr-md-3 px-md-1" onClick={()=>setNavItemsActive(!navItemsActive)}>Home</a>
                <a className="my-0 mr mr-md-3 px-md-1" onClick={()=>setNavItemsActive(!navItemsActive)}>Sobre mim</a>
                <a className="my-0 mr mr-md-3 px-md-1" onClick={()=>setNavItemsActive(!navItemsActive)}>Projetos</a>
                <a className="my-0 mr mr-md-3 px-md-1" onClick={()=>setNavItemsActive(!navItemsActive)}>Contato</a>
                <a className="d-none d-md-flex align-items-center"><i className="fa-regular fa-envelope fa-lg"></i></a>
            </ul>
            </nav>
        </div>
    )
}