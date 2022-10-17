import './aboutUs.css'

const AboutUs = () => {
    return (
        <section id='aboutUsDivFather'>
            <section className='container' id='aboutUsDiv'>
                <div className='row' id='rowAboutUs'>
                    <div id='aboutUsContent' className='col-md'>
                        <h3>
                            Sobre nós
                        </h3>
                        <p id='aboutUsP'>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum.
                        </p>
                    </div>
                    <div id='svgImg' className='col col-md-9'></div>
                </div>
            </section>
        </section>
    )
}

export default AboutUs