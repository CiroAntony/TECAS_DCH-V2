import { brands as brandLabels } from "../catalog.js";
import { Navigate, useParams } from "react-router-dom";
import BrandSwitch from "../components/BrandSwitch.jsx";
import DetailCard from "../components/DetailCard.jsx";
import Solutions from "../components/Solutions.jsx";
import { services, validBrand } from "../catalog.js";

export default function Services() {
  const { brand = "tecas" } = useParams();
  if (!validBrand(brand)) return <Navigate to="/servicios/tecas" replace />;
  return (
    <section className={`wrap ${brand}`}>
      <div className="section-head">
        <div>
          <p className="eyebrow">Servicios</p>
          <h1>
            Mantenemos tu operación en movimiento.{" "}
            <span className="accent">— {brandLabels[brand].name}</span>
          </h1>
        </div>
        <BrandSwitch section="servicios" brand={brand} />
      </div>
      <div className={`services-grid ${brand === "dch" ? "dch-services" : ""}`}>
        {services[brand].map((item, index) => (
          <DetailCard
            key={`${brand}-${index}`}
            item={item}
            index={index}
            section="servicios"
            brand={brand}
          />
        ))}
        {brand === "tecas" && (
          <div className="quote">
            “SOLUCIONES ESPECIALIZADAS PARA MANTENER TUS EQUIPOS OPERATIVOS Y
            FUNCIONANDO AL MÁXIMO.”
          </div>
        )}
      </div>
      <Solutions />
    </section>
  );
}
