import style from './WhatsAppButton.module.css'
import WhatsAppVector from '../../assets/images/whatsapp.svg'

export default function WhatsAppButton(){
    return(
        <button className={style.whatsAppButton}>
            <img src={WhatsAppVector}/>
        </button>
    )
}