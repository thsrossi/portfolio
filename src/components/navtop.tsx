import React, { useState } from "react";
import "../styles/navtop.css"
import Avatar from "../assets/images/Avatar.svg"

export function NavTop(){
    const [navItemsActive, setNavItemsActive] = useState<boolean>(false)

    return(
        <div className="sticky-top navbar px-5">
            <div className="matheus d-flex flex-row align-items-center">
                <img className="profile-picture bg-white mr-4" src={Avatar}/>
                <h3 className="mb-0 d-none d-md-block">Matheus Rossi</h3>
            </div>
            <button className={"d-block d-md-none"} onClick={()=>setNavItemsActive(!navItemsActive)}>_</button>
            <div className={`navtop-items d-md-block 
            ${navItemsActive ? 
            'd-flex flex-column col-12 justify-content-end align-items-end p-0 mt-3' : 
            'd-none'
            }`}>
                <a className="mr-md-4" onClick={()=>setNavItemsActive(!navItemsActive)}>Home</a>
                <a className="mr-md-4" onClick={()=>setNavItemsActive(!navItemsActive)}>Sobre mim</a>
                <a className="mr-md-4" onClick={()=>setNavItemsActive(!navItemsActive)}>Projetos</a>
                <a onClick={()=>setNavItemsActive(!navItemsActive)}>Contato</a>
            </div>
        </div>
    )
}