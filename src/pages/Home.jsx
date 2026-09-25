import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <h1>{"Control y soluciones para tu maquinaria pesada"}</h1>
      <p>
        {
          "Una sola puerta de entrada a dos especialidades: sistemas de DCH Radio control para operar el equipo, y repuestos y componentes de TECAS Maquinarias para mantenerlo funcionando."
        }
      </p>
      <div className="brand-cards unified-brands" aria-label="TECAS Maquinarias y DCH Radio control">
        <article className="brand-card">
          <div className="brand-logo">
            <img
              className=""
              src="assets/p2-1.webp"
              alt="TECAS Maquinarias"
              loading="lazy"
            />
          </div>
          <div className="brand-copy">
            <div className="eyebrow">{"TECAS Maquinarias"}</div>
            <h2>
              {"Componentes y electrónica"}
              <br />
              {"para tus equipos"}
            </h2>
            <p>
              {
                "Dedicada a la importación, comercialización y venta de servicios para actividades de Minería, Energía y Construcción. Con un amplio stock de repuestos, con el fin de mantener sus equipos óptimos y confiables."
              }
            </p>
            <Link className="text-link" to="/aplicaciones/tecas">
              {"Ver aplicaciones →"}
            </Link>
          </div>
        </article>
        <article className="brand-card">
          <div className="brand-logo">
            <img className="" src="assets/p2-2.webp" alt="DCH Radio control" loading="lazy" />
          </div>
          <div className="brand-copy">
            <div className="eyebrow">{"DCH Radio control"}</div>
            <h2>
              {"Control remoto para"}
              <br />
              {"maquinaria industrial"}
            </h2>
            <p>
              {
                "Botonera, PWM/Danfoss y control ON/OFF digital para puente grúa, torre grúa, camión grúa y más."
              }
            </p>
            <Link className="text-link" to="/aplicaciones/dch">
              {"Ver aplicaciones →"}
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
