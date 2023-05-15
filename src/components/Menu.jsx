import { Link } from "react-router-dom";
export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        </li>
        <li>
          <Link to="/tasks">Tareas</Link>
        </li>
      </ul>
    </nav>
  );
}
