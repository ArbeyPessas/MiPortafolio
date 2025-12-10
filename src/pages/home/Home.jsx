import Gallery from "../../components/Gallery";
import InfoCard from "../../components/InfoCard";

import "./Home.css";

import img1 from "../../assets/images/fotoPerfil.jpg"; // si no tienes imágenes elimina o usa public/

const Home = () => {
  const images = [
    { src: img1, alt: "Campus 1" },
    // agrega más imágenes o usa rutas publicas '/images/..'
  ];
  return (
    <section className="page">
      <header className="page-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hola Bienvenido a mi portafolio web</h1>
            <p>
              Mi nombre es Cristian Arbey, Tengo 17 años, actualmente estudio la Tecnología en Desarrollo de Software en la
              Universidad del Valle sede Yumbo, Aqui podras encontrar lo visto en un curso de insercion a la vida universitaria
              y con los contenidos vistos en este curso,tambien mis actividades echas y con algun que otro contenido visual 
              abajo encontraras mi correo 
            </p>
          </div>

          <div className="hero-image-container">
            <img src={img1} alt="Foto perfil" className="hero-image" />
          </div>
        </div>
      </header>

      <section className="page-section">
        <h2>INFO</h2>
        <div className="cards-grid">
          <InfoCard
            title="Perfil"
            subtitle="Estudiante de Tecnología - Desarrollo de Software jornada Diu"
          >
            <p>Pagina web echa con Frameworks de Front-End</p>
          </InfoCard>

          <InfoCard title="Contacto">
            <p>Email: cristian.camayo@correounivalle.edu.co</p>
          </InfoCard>
        </div>
      </section>
    </section>
  );
};

export default Home;
