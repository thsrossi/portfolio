
import style from './ContactButton.module.css'
import React from 'react'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
    className?:string
}

export default function ContactButton({className, ...props}: ButtonProps){
    return(
        <a 
            href={'https://wa.me/5541984567873?text=Ol%C3%A1%2C%20vim%20por%20seu%20portf%C3%B3lio!'} 
            target='_blank'
            className={`${style.contact} ${className}`}
            {...props}
            >
                Vamos conversar!
        </a>
    )
}