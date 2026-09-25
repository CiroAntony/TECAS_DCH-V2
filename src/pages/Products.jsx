import { useRef } from "react";
import {
  Link,
  Navigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import BrandSwitch from "../components/BrandSwitch.jsx";
import Pagination from "../components/Pagination.jsx";
import {
  brands,
  descriptions,
  validBrand,
  normalize,
  boundedInteger,
} from "../catalog.js";

function BrandChoice() {
  return (
    <section className="wrap">
      <p className="eyebrow">Productos</p>
      <h1>Dos catálogos, un solo lugar</h1>
      <div className="catalog-choice">
        <Link to="/productos/tecas">
          <h2>TECAS Maquinarias</h2>
          <p>Componentes y electrónica para tus equipos</p>
          <span>Ver TECAS Maquinarias →</span>
        </Link>
        <Link to="/productos/dch">
          <h2>DCH Radiocontrol</h2>
          <p>Control remoto para maquinaria industrial</p>
          <span>Ver DCH Radiocontrol →</span>
        </Link>
      </div>
    </section>
  );
}

export default function Products() {
  const { brand } = useParams();
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  const resultHeading = useRef(null);
  if (!brand) return <BrandChoice />;
  if (!validBrand(brand)) return <Navigate to="/productos" replace />;
  const info = brands[brand];
  const category = boundedInteger(
    params.get("categoria"),
    0,
    info.categories.length - 1,
  );
  const title = info.categories[category];
  const query = params.get("buscar") || "";
  const searchable = normalize(
    `${title} ${info.codes[category]} ${descriptions[brand][category][0]}`,
  );
  // Preserve the catalog quantities shown in the supplied mockup.
  const total = searchable.includes(normalize(query))
    ? info.counts[category]
    : 0;
  const pageCount = Math.max(1, Math.ceil(total / 6));
  const page = boundedInteger(params.get("pagina") || 1, 1, pageCount);
  const start = (page - 1) * 6;
  const visible = Math.min(6, total - start);
  const returnTo = location.pathname + location.search;

  function selectPage(value) {
    const next = new URLSearchParams(params);
    next.set("pagina", String(value));
    setParams(next);
    resultHeading.current?.scrollIntoView({ block: "start" });
    resultHeading.current?.focus({ preventScroll: true });
  }
  function search(value) {
    const next = new URLSearchParams(params);
    if (value) next.set("buscar", value);
    else next.delete("buscar");
    next.delete("pagina");
    setParams(next, { replace: true });
  }
  return (
    <section className={`wrap ${brand}`}>
      <div className="section-head">
        <div>
          <p className="eyebrow">Productos · {info.name}</p>
          <h1>{info.title}</h1>
          <p className="lead">{info.intro}</p>
        </div>
        <BrandSwitch section="productos" brand={brand} />
      </div>
      <div className="catalog-head">
        <div className="catalog-top">
          <div>
            <h2>Categorías</h2>
            <p>Selecciona el tipo de componente</p>
          </div>
          <label className="search">
            <span className="sr-only">Buscar producto</span>
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              value={query}
              placeholder="Buscar producto o referencia"
              onChange={(event) => search(event.target.value)}
            />
          </label>
        </div>
        <div className="categories" aria-label="Categorías de productos">
          {info.categories.map((label, index) => (
            <button
              type="button"
              className={`category ${category === index ? "active" : ""}`}
              aria-pressed={category === index}
              key={label}
              onClick={() => setParams({ categoria: String(index) })}
            >
              <img
                src={`assets/${info.image}-${index}.webp`}
                alt=""
                loading="lazy"
              />
              <span>{info.name}</span>
              <strong>{label}</strong>
            </button>
          ))}
        </div>
      </div>
      <h2
        className="bar-title result-heading"
        tabIndex={-1}
        ref={resultHeading}
      >
        {title} — <span className="accent">{info.name}</span>
      </h2>
      <p className="count" role="status">
        {total
          ? `Mostrando ${start + 1}–${start + visible} de ${total} resultados`
          : "0 resultados"}
      </p>
      <div className="product-grid">
        {Array.from({ length: visible }, (_, index) => (
          <article
            className="product-card"
            key={`${brand}-${category}-${start + index}`}
          >
            <img
              className="catalog-product-image"
              src={`assets/${info.image}-${category}.webp`}
              alt={title}
              loading="lazy"
            />
            <div className="product-body">
              <span className="code">{info.codes[category]}</span>
              <h3>{title}</h3>
              <p>{descriptions[brand][category][4]}</p>
              <Link
                className="more"
                to={`/detalle/productos/${brand}/${category}`}
                state={{ returnTo }}
                aria-label={`Ver ${title}`}
              >
                Más +
              </Link>
            </div>
          </article>
        ))}
        {!total && (
          <div className="empty">
            <p>No hay resultados para esta búsqueda.</p>
            <button className="primary" onClick={() => search("")}>
              Limpiar búsqueda
            </button>
          </div>
        )}
      </div>
      <Pagination current={page} total={pageCount} onChange={selectPage} />
    </section>
  );
}
