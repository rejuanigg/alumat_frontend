import './tarjeta.css';

function Tarjeta({ titulo, descripcion, estado = 'Pendiente', principal = false }) {
return (
  <article className={`tarjeta ${principal ? 'destacada' : ''}`}>
    <h3>{titulo}</h3>

    <p>{descripcion}</p>

    {principal && <span className="insignia">Módulo central</span>}

    <p className="estado">Estado: {estado}</p>
  </article>
);

}

export default Tarjeta;