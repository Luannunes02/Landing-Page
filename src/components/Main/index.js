import './main.css'
import Arrow from '../imgs/seta_baixo.gif'

const Main = () => {
    return (
        <div className="d-flex justify-content-around container-fluid mx-0 gx-0 px-0" id='mainDiv'>
            <section data-aos="zoom-in" data-aos-duration="1500" className="container" id="apresentation">
                <h1 className='text-dark'>Quer o melhor cartão com o melhor limite?</h1>
                <h3 className='text-dark'>Vem de créditei!</h3>
                <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </section>
            <div id='arrow-down'>
                <img src={Arrow} ></img>
            </div>            
        </div>
    )
}

export default Main