import "./Cripto.css"

const Cripto = ({ name, priceUSD, changePercent24Hr }) => {
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
            </div>
        </div>
        </>
    )
}

export default Cripto