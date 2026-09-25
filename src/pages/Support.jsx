import { Link } from "react-router-dom";

export default function Support() {
  return (
    <section className="support">
      <div className="support-copy">
        <p className="eyebrow">{"Soporte"}</p>
        <h1>
          {"Soporte técnico especializado en controles, tableros y otros"}
        </h1>
        <p>
          {
            "Un mismo equipo técnico atiende tanto los sistemas de DCH Radio control como los repuestos y tableros de TECAS Maquinarias."
          }
        </p>
        <div className="support-tags">
          <span>{"Diagnóstico"}</span>
          <span>{"Reparación"}</span>
          <span>{"Mantenimiento"}</span>
          <span>{"Repuestos"}</span>
          <span>{"Soporte para controles"}</span>
          <span>{"Soporte para tableros"}</span>
        </div>
        <Link to="/contacto" className="primary">
          {"Solicitar soporte →"}
        </Link>
      </div>
      <img
        className=""
        src="assets/p37-0.webp"
        alt="Técnico revisando un tablero de control"
        loading="lazy"
      />
    </section>
  );
}
