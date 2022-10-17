import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container" id="footerContainer">                
                <div id="info">
                    <span><a id='footerLink' href='#logo'>Inicio</a></span>
                    <span><a id='footerLink' href='#cardPartDiv'>Cartão</a></span>
                    <span><a id='footerLink' href='#aboutUsDivFather'>Sobre nós</a></span>
                </div>             
                <p id='copyright'>@ 2022 Luan Nunes</p>
            </div>
        </footer>
    )
}

export default Footer