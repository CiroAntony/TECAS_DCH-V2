import { Link, useLocation } from "react-router-dom";

export default function DetailCard({ item, section, brand, index }) {
  const location = useLocation();
  return (
    <Link
      className="app-card"
      to={`/detalle/${section}/${brand}/${index}`}
      state={{ returnTo: location.pathname + location.search }}
    >
      <img src={`assets/${item[1]}`} alt={item[0]} loading="lazy" />
      <div className="body">
        <h3>{item[0].toUpperCase()}</h3>
        <span>Más información →</span>
      </div>
    </Link>
  );
}
