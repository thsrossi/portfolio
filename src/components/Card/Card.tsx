import style from './Card.module.css'
import RestCountries from '../../assets/images/RestCountries.png'

interface CardProps{
    nome: string;
    tecnologias: [string, string];
    imagem: string;
    repositorio?: string;
    aplicacao?: string;

}

export default function Card({nome, tecnologias, imagem, repositorio, aplicacao}: CardProps) {
    return (
        <div className={`card ${style.projectCard} `}>
            <div className='card-header border-none bg-transparent  p-5'>
                <h3 className='mb-0'>{nome}</h3>
                <div className='d-flex align-items-center mt-4 w-100 '>
                    <p className={`badge badge-primary ${style.tag} mb-0 mr-2`}>{tecnologias[0]}</p>
                    <p className={`badge badge-primary ${style.tag} mb-0`}>{tecnologias[1]}</p>
                </div>
            </div>
            <div className="card-body w-100 px-5 pt-0 pb-5 mb-2">
                <img src={imagem} width={'100%'} />
                <div className='mt-5 d-flex justify-content-end'>

                {repositorio &&
                    <a
                    href={repositorio}
                    target='_blank'
                    className='mr-3'
                    >
                        Repositório
                    </a>
                }
                <a
                    href={aplicacao}
                    target='_blank'
                    >
                    Aplicação

                </a>
                    </div>

            </div>
        </div>
    )
}