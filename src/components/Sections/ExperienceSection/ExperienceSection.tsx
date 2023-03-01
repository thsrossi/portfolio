import Accordion from '../../Accordion/Accordion'
import style from './ExperienceSection.module.css'

export default function ExperienceSection() {
    return (
        <section className={`px-2 px-md-5 row py-2 py-md-5 mx-0 ${style.experiencia}`} id="experience">
            <div className='px-5'>
            <h2 className='mb-5'>Experiência</h2>
            <Accordion/>
            </div>
        </section>
    )
}