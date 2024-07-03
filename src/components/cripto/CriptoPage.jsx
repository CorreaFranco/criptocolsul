
import { useParams } from "react-router-dom"

import usePetition from "./../../hooks/usePetition"
import CriptoInfo from "./info/CriptoInfo"
import CriptoHistory from "./info/CriptoHistory"

import "./CritoPage.css"

const CriptoPage = () => {

    const params = useParams()

    const cripto = usePetition(`assets/${params.id}`)
    const history = usePetition(`assets/${params.id}/history?interval=d1`)

    console.log(cripto)
    return (
        <div className="criptoPage-container">
            { cripto && < CriptoInfo cripto={cripto} /> }
            { history && < CriptoHistory history={history}  /> }
        </div>
    )
}

export default CriptoPage