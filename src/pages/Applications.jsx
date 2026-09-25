import { brands as brandLabels } from "../catalog.js";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import BrandSwitch from "../components/BrandSwitch.jsx";
import DetailCard from "../components/DetailCard.jsx";
import { applications, validBrand } from "../catalog.js";

export default function Applications() {
  const { brand = "tecas" } = useParams();
  const [params, setParams] = useSearchParams();
  if (!validBrand(brand)) return <Navigate to="/aplicaciones/tecas" replace />;
  const items = applications[brand];
  const sectors = ["Todos", ...new Set(items.flatMap((item) => item[2]))];
  const selected = sectors.includes(params.get("sector"))
    ? params.get("sector")
    : "Todos";
  const filtered = items
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => selected === "Todos" || item[2].includes(selected));
  return (
    <section className={`wrap ${brand}`}>
      <div className="section-head">
        <div>
          <p className="eyebrow">Aplicaciones</p>
          <h1>
            Solución por cada tipo de operación{" "}
            <span className="accent">— {brandLabels[brand].name}</span>
          </h1>
        </div>
        <BrandSwitch section="aplicaciones" brand={brand} />
      </div>
      <div className="filters" aria-label="Filtrar por operación">
        {sectors.map((sector) => (
          <button
            key={sector}
            className={selected === sector ? "active" : ""}
            aria-pressed={selected === sector}
            onClick={() => setParams(sector === "Todos" ? {} : { sector })}
          >
            {sector.toUpperCase()}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {filtered.length} aplicaciones
      </p>
      <div className={`app-grid ${brand === "tecas" ? "tecas-grid" : ""}`}>
        {filtered.map(({ item, index }) => (
          <DetailCard
            key={`${brand}-${index}`}
            item={item}
            index={index}
            section="aplicaciones"
            brand={brand}
          />
        ))}
        {brand === "tecas" && selected === "Todos" && (
          <div className="quote">
            “SOLUCIONES ESPECIALIZADAS PARA MANTENER TUS EQUIPOS OPERATIVOS Y
            FUNCIONANDO AL MÁXIMO.”
          </div>
        )}
      </div>
    </section>
  );
}
