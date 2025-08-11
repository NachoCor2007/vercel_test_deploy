import { Link } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import '../App.css';

function Home() {
  return (
    <div className="container">
      <h1>Página de Inicio</h1>
      <p>Esta es la página principal de nuestra aplicación.</p>
      <p>Este es otro párrafo para ver cómo afecta al deploy por pr.</p>
      <div className="navigation">
        <Link to="/about">Ir a Acerca de</Link>
        <Link to="/contact">Ir a Contacto</Link>
      </div>
      <Analytics/>
    </div>
  );
}

export default Home;
