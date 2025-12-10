import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
// Aquí después agregas tus demás páginas
import Contexto from "../pages/contexto/Contexto";
import Normatividad from "../pages/normatividad/Normatividad";
import Emociones from "../pages/emociones/Emociones";
import GestionTiempo from "../pages/tiempo/Tiempo"
import Tecnicas from "../pages/tecnicas/Tecnicas";
import Comunicacion from "../pages/comunicacion/Comunicacion";
import Habilidades from "../pages/habilidades/Habilidades";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contexto-institucional" element={<Contexto />} />
      <Route path="/normatividad" element={<Normatividad />} />
      <Route path="/emociones" element={<Emociones />} />
      <Route path="/gestion-tiempo" element={<GestionTiempo />} />
      <Route path="/tecnicas-estudio" element={<Tecnicas />} />
      <Route path="/comunicacion-resolucion-conflictos" element={<Comunicacion />} />
      <Route path="/habilidades-competencias" element={<Habilidades />} />


      {/* Más rutas aquí */}
    </Routes>
  );
};

export default AppRouter;
