import { Link } from 'react-router-dom';
import '../App.css';
import { Analytics } from "@vercel/analytics/react"

function About() {
  return (
    <div className="container">
      <h1>Acerca de nosotros</h1>
      <p>Esta es la página de información sobre nuestra empresa/proyecto.</p>
      <div className="navigation">
        <Link to="/">Volver al inicio</Link>
        <Link to="/contact">Ir a Contacto</Link>
      </div>
      <Analytics/>
    </div>
  );
}

export default About;
