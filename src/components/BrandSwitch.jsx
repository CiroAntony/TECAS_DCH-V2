import { brands as brandLabels } from "../catalog.js";
import { Link } from "react-router-dom";

export default function BrandSwitch({ section, brand }) {
  return (
    <nav className="switch" aria-label="Elegir marca">
      {["tecas", "dch"].map((value) => (
        <Link
          key={value}
          to={`/${section}/${value}`}
          className={brand === value ? "active" : ""}
          aria-current={brand === value ? "page" : undefined}
        >
          {brandLabels[value].name}
        </Link>
      ))}
    </nav>
  );
}
