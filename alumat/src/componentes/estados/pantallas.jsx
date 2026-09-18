import { useState } from "react";
import "./pantallas.css";

const estados = {
  cargando: "cargando",
  conDatos: "con-datos",
  vacio: "vacio",
  error: "error",
};

const aberturasEjemplo = [
  { nombre: "Ventana corrediza aluminio" },
  { nombre: "Puerta placa interior" },
  { nombre: "Portón levadizo" },
  { nombre: "Portón ancho " },
  { nombre: "Puerta pesada " }
];

export function Pantallas() {
  const [estado, setEstado] = useState(estados.conDatos);
  const [filtro, setFiltro] = useState("");

  const aberturasCoincidentes = aberturasEjemplo.filter((abertura) =>
    abertura.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  const hayFiltroSinResultados =
    estado === estados.conDatos &&
    filtro.trim() !== "" &&
    aberturasCoincidentes.length === 0;

  function cambiarEstado(nuevoEstado) {
    setEstado(nuevoEstado);
  }

  function actualizarFiltro(evento) {
    setFiltro(evento.target.value);
  }

  function limpiarFiltro() {
    setFiltro("");
  }

  const contenidoSinResultados = (
    <div>
      <p>No se encontraron resultados para el filtro aplicado.</p>
      <button className="btn-limpiar-filtro" onClick={limpiarFiltro}>
        Limpiar filtro
      </button>
    </div>
  );

  const contenidoLista = (
    <ul>
      {aberturasCoincidentes.map((abertura) => (
        <li>{abertura.nombre}</li>
      ))}
    </ul>
  );

  const contenidoConDatos =
    (hayFiltroSinResultados && contenidoSinResultados) || contenidoLista;

  const contenidoPorEstado = {
    [estados.cargando]: <p>Cargando...</p>,
    [estados.conDatos]: contenidoConDatos,
    [estados.vacio]: <p>No hay aberturas cargadas.</p>,
    [estados.error]: (
      <p className="mensaje-error">Ocurrió un error al cargar los datos.</p>
    ),
  };

  return (
    <div className="contenedor-pantallas">
      <h2>Aberturas</h2>

      <div className="controles-estado">
        <button
          className={`btn-cargando ${(estado === estados.cargando && "activo") || ""}`}
          onClick={() => cambiarEstado(estados.cargando)}
        >
          Cargando
        </button>
        <button
          className={`btn-con-datos ${(estado === estados.conDatos && "activo") || ""}`}
          onClick={() => cambiarEstado(estados.conDatos)}
        >
          Con datos
        </button>
        <button
          className={`btn-vacio ${(estado === estados.vacio && "activo") || ""}`}
          onClick={() => cambiarEstado(estados.vacio)}
        >
          Vacío
        </button>
        <button
          className={`btn-error ${(estado === estados.error && "activo") || ""}`}
          onClick={() => cambiarEstado(estados.error)}
        >
          Error
        </button>
      </div>

      {estado === estados.conDatos && (
        <input
          type="text"
          className="campo-filtro"
          placeholder="Filtrar por nombre..."
          value={filtro}
          onChange={actualizarFiltro}
        />
      )}

      {contenidoPorEstado[estado]}
    </div>
  );
}
