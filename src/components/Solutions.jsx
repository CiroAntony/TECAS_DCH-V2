import { Link } from "react-router-dom";

export default function Solutions() {
  return (
    <section className="solutions">
      <p className="eyebrow">{"Soluciones"}</p>
      <h2>{"De la idea a la maquinaria en operación"}</h2>
      <p className="lead">
        {
          "Además de vender producto, se desarrolla la solución completa cuando el equipo lo requiere."
        }
      </p>
      <div className="solution-grid">
        <article>
          <span>{"FABRICACIÓN"}</span>
          <h3>{"Fabricación a medida"}</h3>
          <p>
            {"Producción de componentes y sistemas específicos para el equipo."}
          </p>
        </article>
        <article>
          <span>{"DISEÑO"}</span>
          <h3>{"Diseño de sistemas"}</h3>
          <p>
            {
              "Diseño de tableros y soluciones de control adaptadas a la operación."
            }
          </p>
        </article>
        <article>
          <span>{"IMPORTACIÓN"}</span>
          <h3>{"Importación directa"}</h3>
          <p>
            {
              "Abastecimiento de repuestos y componentes desde marcas originales."
            }
          </p>
        </article>
        <article>
          <span>{"INTEGRACIÓN"}</span>
          <h3>{"Integración en planta"}</h3>
          <p>
            {
              "Adaptación e instalación del sistema de control en la maquinaria."
            }
          </p>
        </article>
      </div>
      <img
        className="solution-banner"
        src="assets/p36-0.webp"
        alt="Componentes y sistemas para maquinaria industrial"
        loading="lazy"
      />
    </section>
  );
}
