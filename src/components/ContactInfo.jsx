import { Link } from "react-router-dom";

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
        <h3>{"DCH"}</h3>
        <strong>{"DCH RADIO LIMITED COMPANY"}</strong>
        <br />
        {"Tel.: 021-67629680 / 9681 / 9682"}
        <br />
        {"Teléfono móvil: 18117350677"}
        <br />
        <a href="mailto:Allen.xu@dch-radio.com">{"Allen.xu@dch-radio.com"}</a>
      </div>
      <div className="contact-block">
        <h3>{"TECAS"}</h3>
        <strong>{"TECAS MAQUINARIAS S.A.C."}</strong>
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
