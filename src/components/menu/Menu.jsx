import { NavLink } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    return (
        <nav className="main-menu">
            <ul className="bar-nav">
                <li className="link"><NavLink className="link" to="/">Inicio</NavLink></li>
                <li className="link"><NavLink className="link" to="/criptomonedas">Criptomonedas</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu