export default function ContactInfo() {
  return (
    <div>
      <p className="eyebrow">{"Contacto"}</p>
      <h1>{"¿Necesitas una solución para tu maquinaria?"}</h1>
      <p>
        {
          "Escríbenos y te ayudamos a identificar el radiocontrol o repuesto correcto para tu equipo."
        }
      </p>
      <div className="contact-block">
        <h3>{"TECAS Maquinarias"}</h3>
        <strong>{"TECAS Maquinarias S.A.C."}</strong>
        <br />
        <a href="tel:+51949988111">{"Teléfono móvil: (+51) 949 988 111"}</a>
        <br />
        <a href="mailto:ventas@tecasmaquinarias.com">
          {"ventas@tecasmaquinarias.com"}
        </a>
      </div>
      <div className="contact-block">
        <h3>{"Ubicación"}</h3>
        {"Lima, Perú"}
      </div>
    </div>
  );
}
