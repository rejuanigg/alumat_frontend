import './navbar.css'
import '../global-styles/global-styles.css'
import logo from '../../assets/alumatp.png'

function Navbar() {
    return(
        <nav className="navbar--container">
            <img className='navbar--logo' src={logo} alt="" />
            <ol className="navbar--list">
                <li className="navbar--list__item "><a href="#" className="item--link item--hover">Home</a></li>
                <li className="navbar--list__item "><a href="#" className="item--link item--hover">Acerca de nosotros</a></li>
                <li className="navbar--list__item "><a href="#" className="item--link item--hover">Contacto</a></li>
            </ol>
        </nav>
    )
}

export default Navbar