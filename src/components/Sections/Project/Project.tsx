import Card from "../../Card/Card";
import RestCountriesImage from "../../../assets/images/RestCountries.png"
import ReactCartImage from "../../../assets/images/reactcartshopping.jpeg"

export default function Project() {
    return (
        <section className={`w-100  pt-5 pb-lg-5`} id="experience" style={{ scrollMarginTop: "+69px" }}>
            <div className='container'>
                <div className='row gx-md-4 gx-lg-5 gy-5'>
                    <div className="col-12 col-md-6 px-lg-5">
                        <h2 className='pb-5 pb-lg-3'>Projetos</h2>
                        <p style={{'color':'#d7d7d7', fontSize:'0.95rem', marginBottom: '4.5rem'}}>Últimos projetos realizados</p>
                        <Card 
                            nome='Rest Countries'
                            tecnologias={['React', 'Styled Components']}
                            aplicacao="https://restcountries-themeswitcher.netlify.app/"
                            imagem={RestCountriesImage}
                            repositorio={'https://github.com/thsrossi/REST-Countries-API-with-color-theme-switcher-frontend-mentor'}
                        />

                    </div>
                    <div className="col-12 col-md-6 px-lg-5 ">
                        
                        <Card 
                            nome='Shopping Cart React'
                            tecnologias={['React', 'Styled Components']}
                            aplicacao="https://rossi-react-cart-shopping.netlify.app/"
                            imagem={ReactCartImage}
                            repositorio={'https://github.com/thsrossi/ShoppingCartReact'}
                        />

                    </div>

                </div>
            </div>
        </section>
    )
}