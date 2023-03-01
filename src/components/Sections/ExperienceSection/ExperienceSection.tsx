import Accordion from '../../Accordion/Accordion'
import style from './ExperienceSection.module.css'

export default function ExperienceSection() {
    return (
        <section className={`w-100  py-2 py-md-5 ${style.experiencia}`} id="experience" style={{scrollMarginTop: "+69px"}}>
            <div className='container'>
            <h2 className='mb-5'>Experiência</h2>
            <Accordion/>
            </div>
        </section>
    )
}