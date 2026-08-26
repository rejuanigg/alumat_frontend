import './area-principal.css';
import Tarjeta from '../tarjeta/tarjeta';

function AreaPrincipal() {
  return (
    <main className="contenido">
      <h2>Sistema de Gestión ALUMAT</h2>

      <p>
        Sistema para la gestión de una fábrica de aberturas de aluminio.
        Su objetivo es organizar y facilitar el manejo de la información
        de la empresa, reduciendo tareas manuales y errores.
      </p>

      <h3>Módulos previstos</h3>

      <section className="modulos">

        <article className="tarjeta">
          <h3>Gestión de Clientes</h3>
          <p>Permite registrar, modificar, buscar y listar clientes.</p>
        </article>

        <article className="tarjeta">
          <h3>Gestión de Productos</h3>
          <p>Permite registrar, modificar y consultar productos.</p>
        </article>

        <article className="tarjeta">
          <h3>Gestión de Stock</h3>
          <p>Permite registrar y consultar el stock de productos y materiales.</p>
        </article>

        <article className="tarjeta">
          <h3>Gestión de Ventas</h3>
          <p>Permite generar presupuestos, registrar pagos y gestionar ventas.</p>
        </article>

        <article className="tarjeta">
          <h3>Gestión de Usuarios</h3>
          <p>Permite registrar usuarios, asignar roles y modificar sus datos.</p>
        </article>

      </section>
    </main>
  );
}

export default AreaPrincipal;