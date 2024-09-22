import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <Link to="/">INICIO</Link>
      <Link to="/category/men's clothing">ROPA DE HOMBRE</Link>
      <Link to="/category/women's clothing">ROPA DE MUJER</Link>
    </nav>
  );
}

export default NavBar;

