import Accordion from '../../Accordion/Accordion'
import style from './ExperienceSection.module.css'

export default function ExperienceSection() {
    return (
        <section className={`w-100  pt-5 pb-lg-5 ${style.experiencia}`} id="experience" style={{scrollMarginTop: "+69px"}}>
            <div className='container'>
            <h2 className='pb-5 pb-lg-3'>Experiência</h2>
            <Accordion/>
            </div>
        </section>
    )
}