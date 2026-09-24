import { Link } from "react-router-dom";

export default function AboutDch() {
  return (
    <div className="about">
      <aside className="about-aside">
        <h1>{"DCH"}</h1>
        <p>
          {
            "Radiocontrol y tecnología para maquinaria. Sistemas de radiocontrol industrial con soporte técnico especializado en controles y tableros."
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
                "Desarrollar e implementar sistemas de radiocontrol y tecnología para maquinaria industrial, brindando soporte técnico especializado en controles y tableros que optimice la operación de nuestros clientes."
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
                "Ser el referente en tecnología de radiocontrol para maquinaria industrial en el Perú, destacando por la innovación y la especialización técnica de nuestro equipo."
              }
            </p>
          </div>
        </article>
        <article>
          <span className="initial">{"V"}</span>
          <div>
            <h2>{"VALORES"}</h2>
            <div className="values">
              <span>{"Innovación"}</span>
              <span>{"Especialización técnica"}</span>
              <span>{"Soporte cercano"}</span>
              <span>{"Precisión"}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
