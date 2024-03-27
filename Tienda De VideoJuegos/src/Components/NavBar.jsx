import "../Components/NavBar.css";
import logoReact from "../assets/react.svg";
import CartWidget from "../Components/carrito";
import { Link } from "react-router-dom";

function navBar() {
  return (
    <>
      <nav>
        <div className="divLN">
          <img className="logoReact" src={logoReact} alt="logoReact" />
          <h1 className="tiendaNombre">Tienda De VideoJuegos</h1>
        </div>
        <ul>
          <button className="btnNav">
            <li>
              <Link to="/">Home</Link>
            </li>
          </button>
          <button className="btnNav">
            <li>
              <Link to="/category/pc">PC</Link>
            </li>
          </button>
          <button className="btnNav">
            <li>
              <Link to="/category/xbox">Xbox</Link>
            </li>
          </button>
          <button className="btnNav">
            <li>
              <Link to="/category/ps">PS</Link>
            </li>
          </button>
          <CartWidget></CartWidget>
        </ul>
      </nav>
    </>
  );
}

export default navBar;
