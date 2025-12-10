import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <nav className="header-nav">
        <div className="top-nav">
          <NavLink to="/" className={({ isActive }) => `auth-link ${isActive ? "active" : ""}`}>Mi Perfil</NavLink>
          <NavLink to="/contexto-institucional" className={({ isActive }) => `auth-link ${isActive ? "active" : ""}`}>Contexto I.U</NavLink>
          <NavLink to="/normatividad" className={({ isActive }) => `auth-link ${isActive ? "active" : ""}`}>Normatividad C.U</NavLink>
          <NavLink to="/emociones" className={({ isActive }) => `auth-link ${isActive ? "active" : ""}`}>Manejo de Emociones</NavLink>
          <NavLink to="/gestion-tiempo" className={({ isActive }) => `auth-link ${isActive ? "active" : ""}`}>Manejo del Tiempo</NavLink>
          <NavLink to="/tecnicas-estudio" className={({ isActive }) => `auth-link ${isActive ? "active" : ""}`}>Técnicas de Estudio</NavLink>
          <NavLink to="/referencias">Referencias</NavLink>

        </div>
      </nav>
    </header>
  );
};

export default Header;
