import CardImage from '../imgs/cartaopng.png'
import './card.css'


const Card = () => {
    return (
        <div id='cardPartDiv'>
            <section id="cardPart" className="container d-flex row text-center justify-content-center">
            <div data-tilt  className='col' >
                <img src={CardImage} alt='Cartão' id='cardImg'/>
            </div>
            
            <sections className='col' id='textContainer'>
                <h3 className='fs-3' id='titleCard'>
                    O melhor cartão com as melhores taxas
                </h3>
                <p className=' ' id='textCard'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                </p>
                
            </sections>
        </section>
        </div>
        
    )
}

export default Card