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
            <h1>Cristian Arbey Camayo Pesas</h1>
            <p>
              Tengo 17 años, estudio Tecnología en Desarrollo de Software en la
              Universidad del Valle - sede Yumbo. Apasionado por la informática
              y el desarrollo de software.
            </p>
          </div>

          <div className="hero-image-container">
            <img src={img1} alt="Foto perfil" className="hero-image" />
          </div>
        </div>
      </header>

      <section className="page-section">
        <h2>Cards</h2>
        <div className="cards-grid">
          <InfoCard
            title="Perfil"
            subtitle="Tecnología - Desarrollo de Software"
          >
            <p>Intereses: programación, diseño y gestión del tiempo.</p>
          </InfoCard>

          <InfoCard title="Contacto">
            <p>Email: cristiankamayo01@gmail.com</p>
          </InfoCard>
        </div>
      </section>
    </section>
  );
};

export default Home;
