
import style from './ContactButton.module.css'
export default function ContactButton(){
    return(
        <a 
            href={'https://wa.me/5541984567873?text=Ol%C3%A1%2C%20vim%20por%20seu%20portf%C3%B3lio!'} 
            target='_blank'
            className={style.contact}
            >
                Vamos conversar!
        </a>
    )
}