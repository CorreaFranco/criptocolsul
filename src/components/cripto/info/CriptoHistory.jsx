

const CriptoHistory = ({ history }) => {
    return (
        <section className="history">
            <h1>{}</h1>
            <table className="history-table-container">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
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
    )
}

export default CriptoHistory