
const criptoInfo = ({cripto}) => {
    return (
        <section className="info">
            <div className="info-cripto">
                <p className="rank">{cripto.rank}</p>
                <h1 className="title">{cripto.id}</h1>
                <h2 className="symbol">{cripto.symbol}</h2>
            </div>
            <div className="info-detail">
                <p>
                    <span className="label">Precio: </span>
                    <span className="label-two">{ parseFloat(cripto.priceUsd).toFixed(4) } $</span>
                </p>
                <p>
                    <span className="label">Variación:  </span>
                    <span className={parseFloat(cripto.changePercent24Hr) > 0  ? "positivo" : "negativo"}>
                        {parseFloat(cripto.changePercent24Hr).toFixed(4)}%
                    </span>
                </p>
            </div>
        </section>
    )
}

export default criptoInfo