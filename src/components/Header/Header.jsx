import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <h1>Titulo del header</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/projects">
              proyectos
             </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
