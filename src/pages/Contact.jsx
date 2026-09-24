import { useRef, useState } from "react";
import ContactInfo from "../components/ContactInfo.jsx";

export default function Contact() {
  const form = useRef(null);
  const [message, setMessage] = useState("");
  function validate() {
    if (form.current.reportValidity())
      setMessage(
        "El envío desde este formulario no está disponible. Puedes contactarnos por correo o WhatsApp.",
      );
  }
  return (
    <section className="contact">
      <ContactInfo />
      <form
        ref={form}
        onSubmit={(event) => event.preventDefault()}
        onKeyDown={(event) => {
          if (event.key === "Enter" && event.target.tagName === "INPUT")
            event.preventDefault();
        }}
      >
        <h2>Conversemos</h2>
        <label>
          Nombre
          <input name="nombre" autoComplete="name" required />
        </label>
        <label>
          Correo electrónico
          <input name="correo" type="email" autoComplete="email" required />
        </label>
        <label>
          Teléfono
          <input name="telefono" type="tel" autoComplete="tel" />
        </label>
        <label>
          Mensaje
          <textarea name="mensaje" required />
        </label>
        <button className="primary" type="button" onClick={validate}>
          Enviar consulta
        </button>
        <p className="form-result" role="status">
          {message}
        </p>
      </form>
    </section>
  );
}
