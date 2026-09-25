import { Link } from "react-router-dom";

export default function AboutTecas() {
  return (
    <div className="about">
      <aside className="about-aside">
        <h1>{"TECAS Maquinarias S.A.C."}</h1>
        <p>
          {
            "Empresa peruana dedicada a la importación, comercialización y venta de servicios para Minería, Energía y Construcción, con amplio stock de repuestos."
          }
        </p>
      </aside>
      <div className="mv">
        <article>
          <span className="initial">{"M"}</span>
          <div>
            <h2>{"MISIÓN"}</h2>
            <p>
              {
                "Importar, comercializar y brindar servicios de mantenimiento para equipos de Minería, Energía y Construcción, con un amplio stock de repuestos que garantice la operatividad y confiabilidad de la maquinaria de nuestros clientes."
              }
            </p>
          </div>
        </article>
        <article>
          <span className="initial">{"V"}</span>
          <div>
            <h2>{"VISIÓN"}</h2>
            <p>
              {
                "Ser la empresa peruana líder en importación y comercialización de maquinaria y repuestos para Minería, Energía y Construcción, reconocida por la disponibilidad de stock y la confiabilidad de sus equipos."
              }
            </p>
          </div>
        </article>
        <article>
          <span className="initial">{"V"}</span>
          <div>
            <h2>{"VALORES"}</h2>
            <div className="values">
              <span>{"Confiabilidad"}</span>
              <span>{"Disponibilidad"}</span>
              <span>{"Compromiso"}</span>
              <span>{"Calidad de servicio"}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
