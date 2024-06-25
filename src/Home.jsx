import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
    return (
        <main className="main-container">
            <h1 className="title">Criptocunsul</h1>
            <div className="link-container">
                <Link className="link-criptomonedas" to="/criptomonedas">Ver criptomonedas</Link>
            </div>
        </main>
    )
}

export default Home