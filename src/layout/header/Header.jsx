import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css"

const Header = () => {
  // const { userLooged, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  }

  return (
    <header className="main-header">
      <nav className="header-nav">
        <div className="top-nav">
          <NavLink to="/" className={({isActive})=>`auth-link ${isActive ? 'active' : ''}`}>Inicio</NavLink>
          <NavLink to="/contexto-institucional" className={({isActive})=>`auth-link ${isActive ? 'active' : ''}`}>Contexto I.U</NavLink>
          <NavLink to="/normatividad" className={({isActive})=>`auth-link ${isActive ? 'active' : ''}`}>Normatividad C.U</NavLink>
          <NavLink to="/emociones" className={({isActive})=>`auth-link ${isActive ? 'active' : ''}`}>Manejo de Emóciones</NavLink>
          <NavLink to="/gestion-tiempo" className={({isActive})=>`auth-link ${isActive ? 'active' : ''}`}>Manejo del Tiempo</NavLink>
          <NavLink to="/tecnicas-estudio" className={({isActive})=>`auth-link ${isActive ? 'active' : ''}`}>Tecnicas de Estudio</NavLink>
          <NavLink to="/comunicacion-resolucion-conflictos" className={({isActive})=>`auth-link ${isActive ? 'active' : ''}`}>Comunicacion</NavLink>
          <NavLink to="/habilidades-competencias" className={({isActive})=>`auth-link ${isActive ? 'active' : ''}`}>Competencias/Habilidades</NavLink>
        </div>

    
      </nav>
    </header>
  );
};

export default Header;

