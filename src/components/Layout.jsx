import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const links = [
  ["/inicio", "Inicio"],
  ["/nosotros", "Nosotros"],
  ["/aplicaciones", "Aplicaciones"],
  ["/productos", "Productos"],
  ["/servicios", "Servicios"],
  ["/soporte", "Soporte"],
  ["/contacto", "Escríbenos ↗"],
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const main = useRef(null);
  const menu = useRef(null);
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0 });
    main.current?.focus({ preventScroll: true });
  }, [location.pathname]);
  useEffect(() => {
    function escape(event) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menu.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <>
      <a
        className="skip"
        href="#content"
        onClick={(event) => {
          event.preventDefault();
          main.current?.focus();
        }}
      >
        Saltar al contenido
      </a>
      <header>
        <Link className="wordmark" to="/inicio" aria-label="TECAS DCH, inicio">
          TECAS <span>·</span> <b>DCH</b>
        </Link>
        <button
          ref={menu}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          Menú ☰
        </button>
        <nav
          id="navigation"
          className={open ? "open" : ""}
          aria-label="Navegación principal"
        >
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={to === "/contacto" ? "contact-link" : undefined}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="content" tabIndex={-1} ref={main}>
        <Outlet />
      </main>
      <footer>
        <Link className="wordmark" to="/inicio">
          TECAS <span>·</span> <b>DCH</b>
        </Link>
        <span>Maquinaria, componentes y radiocontrol industrial.</span>
        <Link to="/contacto">Lima, Perú · Contacto</Link>
      </footer>
      <a
        className="whatsapp"
        href="https://wa.me/51949988111"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a TECAS por WhatsApp"
      >
        <img src="assets/p5-0.webp" alt="WhatsApp" />
      </a>
    </>
  );
}
