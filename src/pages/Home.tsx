import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="container">
      <h1>Página de Inicio</h1>
      <p>Esta es la página principal de nuestra aplicación.</p>
      <div className="navigation">
        <Link to="/about">Ir a Acerca de</Link>
        <Link to="/contact">Ir a Contacto</Link>
      </div>
    </div>
  );
}

export default Home;
