import './navbar.css'
import logo from '../../assets/alumatp.png'

function Navbar() {
    return(
        <nav className="navbar--container">
            <img className='navbar--logo' src={logo} alt="" />
            <ol className="navbar--list">
                <li className="navbar--list__item"><a href="#" className="item--link">Home</a></li>
                <li className="navbar--list__item"><a href="#" className="item--link">Acerca de nosotros</a></li>
                <li className="navbar--list__item"><a href="#" className="item--link">Contacto</a></li>
            </ol>
        </nav>
    )
}

export default Navbar