import { Navigate, useParams } from "react-router-dom";
import BrandSwitch from "../components/BrandSwitch.jsx";
import AboutTecas from "../components/AboutTecas.jsx";
import AboutDch from "../components/AboutDch.jsx";
import { validBrand } from "../catalog.js";

export default function About() {
  const { brand = "tecas" } = useParams();
  if (!validBrand(brand)) return <Navigate to="/nosotros/tecas" replace />;
  return (
    <section className={`wrap ${brand}`}>
      <div className="section-head">
        <p className="eyebrow">Nosotros · {brand.toUpperCase()}</p>
        <BrandSwitch section="nosotros" brand={brand} />
      </div>
      {brand === "tecas" ? <AboutTecas /> : <AboutDch />}
    </section>
  );
}
