import style from './WhatsAppButton.module.css'
import WhatsAppVector from '../../assets/images/whatsapp.svg'

export default function WhatsAppButton(){

    return(
        <a className={style.whatsAppButton} href={'https://wa.me/5541984567873?text=Ol%C3%A1%2C%20vim%20por%20seu%20portf%C3%B3lio!'} target='_blank'>
            <img src={WhatsAppVector}/>
        </a>
    )
}