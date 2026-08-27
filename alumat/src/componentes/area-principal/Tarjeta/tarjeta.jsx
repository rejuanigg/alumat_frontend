import './tarjeta.css';

function Tarjeta({ titulo, descripcion }) {
  return (
    <article className="tarjeta">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </article>
  );
}

export default Tarjeta;