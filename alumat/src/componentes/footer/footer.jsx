import './footer.css';
import alumatLogo from '../../assets/alumatp.png'

function Footer() {
    return (
        <footer className="contenedor">
            <img src={alumatLogo} className='imagen'></img>
            <ul className='contenedor--lista'>
                <li className='contenedor--lista__item'>Inicio</li>
                <li className='contenedor--lista__item'>¿Quiénes somos?</li>
                <li className='contenedor--lista__item'>¿Dónde estamos?</li>
                <li className='contenedor--lista__item'>Contacto</li>
            </ul>
            <form className='form--container'>
                <h4 className='form--title'> Suscribete a noticias de Alumat </h4>
                <div className='form--input__container'>
                    <input className='form--input' type="email" />
                    <button className='form--button' type='submit'>Enviar</button>
                </div>
            </form>
        </footer>
    );
}

export default Footer;