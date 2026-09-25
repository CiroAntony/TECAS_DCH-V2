import { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Applications from "./pages/Applications.jsx";
import Products from "./pages/Products.jsx";
import Services from "./pages/Services.jsx";
import Support from "./pages/Support.jsx";
import Contact from "./pages/Contact.jsx";
import Detail from "./pages/Detail.jsx";

function LegacyCategory() {
  const { brand, id } = useParams();
  return <Navigate to={`/productos/${brand}?categoria=${id}`} replace />;
}

export default function App() {
  const location = useLocation();
  useEffect(() => {
    const section = location.pathname.split("/")[1] || "inicio";
    if (section !== "detalle")
      document.title = `${section.charAt(0).toUpperCase() + section.slice(1)} | TECAS Maquinarias · DCH Radiocontrol`;
  }, [location.pathname]);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/inicio" replace />} />
        <Route path="inicio" element={<Home />} />
        <Route path="nosotros/:brand?" element={<About />} />
        <Route path="aplicaciones/:brand?" element={<Applications />} />
        <Route path="productos/:brand?" element={<Products />} />
        <Route path="servicios/:brand?" element={<Services />} />
        <Route path="soporte" element={<Support />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="detalle/:section/:brand/:id/*" element={<Detail />} />
        <Route path="categoria/:brand/:id" element={<LegacyCategory />} />
        <Route
          path="*"
          element={
            <section className="wrap">
              <h1>Página no encontrada</h1>
              <Link className="primary" to="/inicio">
                Volver al inicio
              </Link>
            </section>
          }
        />
      </Route>
    </Routes>
  );
}
