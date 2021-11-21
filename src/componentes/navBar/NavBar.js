import "./NavBar.css";

//router
import { Link } from "react-router-dom";
//componentes
import CartWidget from "../card/CartWidget";

const NavBar = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1>Mini Mercado</h1>
      </Link>

      <div>
        <ul className="filtro">
          <Link to={`/categories/${"Todo"}`}>
            <li>Todo</li>
          </Link>
          <Link to={`/categories/${"snack"}`}>
            <li>Snacks</li>
          </Link>
          <Link to={`/categories/${"alfajores"}`}>
            <li>Alfajores</li>
          </Link>
          <Link to={`/categories/${"gaseosa"}`}>
            <li>Gaseosas</li>
          </Link>
          <Link to={`/categories/${"energizante"}`}>
            <li>Energizantes</li>
          </Link>
          <Link to={`/categories/${"cerveza"}`}>
            <li>Cervezas</li>
          </Link>
        </ul>
      </div>

      <nav className="navegacion">
        <ul className="lista">
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="/">
            <li>Productos</li>
          </Link>
          <Link to="/cart">
            <li className="cart">
              <CartWidget />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
