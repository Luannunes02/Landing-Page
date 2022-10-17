import './header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-xl bg-success bg-gradient">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#" id='logo'>CRÉDITEI</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse me-5" id="navbarNav">
                        <ul className="navbar-nav" id="ul">                            
                            <li className="nav-item">
                                <a className="nav-link" href="#logo" id='headerBtn'>Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#cardPartDiv" id='headerBtn'>Cartão</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#aboutUsDivFather" id='headerBtn'>Sobre nós</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    )
}

export default Header
