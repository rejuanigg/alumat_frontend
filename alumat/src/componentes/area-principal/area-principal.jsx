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

        <Tarjeta
          titulo="Gestión de Clientes"
          descripcion="Permite registrar, modificar, buscar y listar clientes."
          principal
        />
        <Tarjeta
          titulo="Gestión de Productos"
          descripcion="Permite registrar, modificar y consultar productos."
        />

        <Tarjeta
          titulo="Gestión de Stock"
          descripcion="Permite registrar y consultar el stock de productos y materiales."
        />

        <Tarjeta
          titulo="Gestión de Ventas"
          descripcion="Permite generar presupuestos, registrar pagos y gestionar ventas."
          estado="En análisis"
        />

        <Tarjeta
          titulo="Gestión de Usuarios"
          descripcion="Permite registrar usuarios, asignar roles y modificar sus datos."
        />

      </section>
    </main>
  );
}

export default AreaPrincipal;