import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { details } from "../catalog.js";

export default function Detail() {
  const { section, brand, id } = useParams();
  const { state } = useLocation();
  const item = details[`detalle/${section}/${brand}/${id}`];
  const label =
    {
      productos: "productos",
      servicios: "servicios",
      aplicaciones: "aplicaciones",
    }[section] || "inicio";
  const fallback = `/${label}/${brand}${section === "productos" ? `?categoria=${id}` : ""}`;
  const returnPath = state?.returnTo?.split('?')[0];
  const returnTo = [ `/${label}`, `/${label}/${brand}` ].includes(returnPath)
    ? state.returnTo
    : fallback;
  useEffect(() => {
    if (item) document.title = `${item.title} | TECAS · DCH`;
  }, [item]);
  if (!item)
    return (
      <section className="wrap">
        <h1>No encontramos esta ficha</h1>
        <Link className="primary" to="/productos">
          Ver productos
        </Link>
      </section>
    );
  return (
    <section className={`wrap ${brand}`}>
      <div className="detail-top">
        <h1>{item.title}</h1>
        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <Link to="/inicio">Inicio</Link> /{" "}
          <Link to={returnTo}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Link>{" "}
          / {brand.toUpperCase()}
        </nav>
      </div>
      <div className="detail">
        <div>
          <img
            className={`detail-image ${section === "productos" ? "category-image" : ""}`}
            src={item.image}
            alt={item.title}
          />
          <Link className="text-link" to={returnTo}>
            ← Volver a {label}
          </Link>
        </div>
        <div>
          <p className="eyebrow">{item.eyebrow}</p>
          <h2>{item.title}</h2>
          <p className="detail-description">{item.description}</p>
          <dl className="specs">
            {item.specs.map(([name, value]) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <Link className="primary" to="/contacto">
            Consultar por esta solución →
          </Link>
        </div>
      </div>
    </section>
  );
}
