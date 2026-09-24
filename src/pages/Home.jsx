import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <h1>{"Control y soluciones para tu maquinaria pesada"}</h1>
      <p>
        {
          "Una sola puerta de entrada a dos especialidades: radiocontroles DCH para operar el equipo, y repuestos y componentes TECAS para mantenerlo funcionando."
        }
      </p>
      <div className="brand-cards">
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
            <div className="eyebrow">{"Maquinarias TECAS"}</div>
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
            <img className="" src="assets/p2-2.webp" alt="DCH" loading="lazy" />
          </div>
          <div className="brand-copy">
            <div className="eyebrow">{"Radiocontroles DCH"}</div>
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
