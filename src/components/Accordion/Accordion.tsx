import style from './Accordion.module.css'
import MaxCore from '../../assets/images/MaxCore.jpg'
import LeadLovers from '../../assets/images/Leadlovers.png'

export default function Accordion() {
    return (
        <div className={style.accordionCustom}>
            <div className={`accordion bg-transparent`} id="accordion">
                <div className="accordion-item bg-transparent">
                    <div className="accordion-header" id="headingOne">
                        <button className={`accordion-button bg-transparent ${style.btnCustom}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <img src={MaxCore} className='mr-3' />
                            MaxCore Informática - Desenvolvedor front-end
                        </button>
                    </div>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            {/* <strong></strong> <br/> */}
                            Responsável pelo desenvolvimento de interfaces web usando tecnologias como ReactJS com TypeScript, além de outras tecnologias suplementares como Chakra UI, Material UI e Bootstrap. Também atuo em colaboração com o time de design UI/UX, auxiliando na elaboração de ideias e na implementação de soluções de design eficazes. Além disso, mantenho-me atualizado com as melhores práticas de desenvolvimento front-end.Responsável pelo desenvolvimento de interfaces web usando tecnologias como ReactJS com TypeScript, além de outras tecnologias suplementares como Chakra UI, Material UI e Bootstrap. Também atuo em colaboração com o time de design UI/UX, auxiliando na elaboração de ideias e na implementação de soluções de design eficazes. Além disso, mantenho-me atualizado com as melhores práticas de desenvolvimento front-end.
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-transparent">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className={`accordion-button collapsed bg-transparent ${style.btnCustom}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <img src={LeadLovers} className='mr-3' />
                            Leadlovers - Analista de atendimento técnico
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Responsabilidade sobre o segundo nível do suporte da empresa, ajustando responsividade de páginas
                            (HTML, CSS e BootStrap), realizando consultas de logs e informações no banco de dados(Microsoft SQL Server), realizando contato direto com o time de desenvolvimento quando necessário.
                            Auxílio direto ao nível 1 do suporte, tirando dúvidas.
                            Participei do projeto RangeHub, onde os analistas técnicos entendiam e implementavam a estratégia do cliente na plataforma, criando todo o caminho do lead conforme solicitado pelo cliente, criando fluxo de e-mails(funil de vendas), auxiliando na criação de CopyWriting, criação de páginas nos construtores da plataforma usando HTML, CSS e BootStrap, configuração de Facebook Pixel, Google SEO, entre outros.
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-transparent">
                    <div className="accordion-header" id="headingThree">
                        <button className={`accordion-button bg-transparent ${style.btnCustom}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            <div id={`${style.icon}`} className='mr-3'>

                            <i className="fa-solid fa-headset fa-2x"></i>
                            </div>
                            
                            Centrais de atendimento telefônico
                        </button>
                    </div>
                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Trabalhei em centrais de atendimento telefônico, onde adquiri experiência em vendas e suporte ao cliente, complementando minhas habilidades de comunicação e atendimento ao cliente.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}