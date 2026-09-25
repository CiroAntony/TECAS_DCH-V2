import { Link } from "react-router-dom";

export default function Wordmark() {
  return (
    <Link className="wordmark full-wordmark" to="/inicio" aria-label="TECAS Maquinarias y DCH Radiocontrol, inicio">
      <span className="wordmark-brand"><strong>TECAS</strong><small>Maquinarias</small></span>
      <span className="wordmark-divider" aria-hidden="true" />
      <span className="wordmark-brand wordmark-dch"><strong>DCH</strong><small>Radiocontrol</small></span>
    </Link>
  );
}
