import { Link } from 'react-router-dom';
import '../App.css';

function Contact() {
  return (
    <div className="container">
      <h1>Contacto</h1>
      <p>Aquí puedes encontrar información para contactarnos.</p>
      <div className="navigation">
        <Link to="/">Volver al inicio</Link>
        <Link to="/about">Ir a Acerca de</Link>
      </div>
    </div>
  );
}

export default Contact;
