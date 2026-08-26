import './footer.css';

function Footer() {
    return (
        <footer className="contenedor">
            <div className='imagen'></div>
            <ul className='contenedor--lista'>
                <li className='contenedor--lista__item'>Inicio</li>
                <li className='contenedor--lista__item'>¿Quiénes somos?</li>
                <li className='contenedor--lista__item'>¿Dónde estamos?</li>
                <li className='contenedor--lista__item'>Contacto</li>
            </ul>
        </footer>
    );
}

export default Footer;