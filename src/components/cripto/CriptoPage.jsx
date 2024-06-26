
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

import "./CritoPage.css"


const CriptoPage = () => {

    const API_URL = import.meta.env.VITE_API_URL

    const params = useParams()

    const [cripto, setCripto] = useState({})
    const [history, setHistory] = useState([])

    useEffect( () => {
        axios.get(`${API_URL}assets/${params.id}`)
            .then((data) => {
                setCripto(data.data.data)
                console.log(data.data.data)
            })
            .catch( () => {
                console.log("La peticion fallo")
            })
    }, [])

    useEffect( () => {
        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
            .then((data) => {
                setHistory(data.data.data)
            })
            .catch( () => {
                console.log("La peticion fallo")
            })
    }, [])

    // Le quite los array vacios a UseEffect

    if (!history) return <span>Cargando...</span>

    return (
        <div className="criptoPage-container">
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

            <section className="history">
                    <h2 className="history-title">Historial de {cripto.id}</h2>
                    <table className="history-table-container">
                            <thead>
                                <th>Fecha</th>
                                <th>Precio</th>
                            </thead>
                        <tbody>
                            {
                                history.map( ( { date, priceUsd, time } ) => (
                                    <tr className="history-table-date" key={time}>
                                        <td className="one">{ new Date(date).toDateString()}</td>
                                        <td className="two">{ parseFloat(priceUsd).toFixed(4)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            </section>
        </div>
    )
}

export default CriptoPage