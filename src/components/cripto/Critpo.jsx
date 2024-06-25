import { Link } from "react-router-dom"
import "./Cripto.css"

const Cripto = ({ id, name, priceUSD, changePercent24Hr }) => {
    return (
        <>
        <div className="cripto">
            <h2>{name}</h2>
            <div className="info">
                <p>
                    <span className="label">Precio: </span>
                    <span className="label-two">
                        {parseFloat(priceUSD).toFixed(4)}
                    </span>
                </p>
                <p>
                    <span className="label">Variación:  </span>
                    <span className={parseFloat(changePercent24Hr) > 0  ? "positivo" : "negativo"}>
                        {parseFloat(changePercent24Hr).toFixed(4)}%
                    </span>
                </p>
                <p>
                    <div className="detalles-container">
                        <Link className="detalles" to={`/criptomonedas/${id}`}>Ver Detalles</Link>
                    </div>
                </p>
            </div>
        </div>
        </>
    )
}

export default Cripto