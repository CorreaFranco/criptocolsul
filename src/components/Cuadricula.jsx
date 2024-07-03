
import usePetition from "../hooks/usePetition"
import Cripto from "./cripto/Critpo"
import "./Cuadricula.css"

function Cuadricula() {

  const criptos = usePetition(`assets`)

  if (!criptos) return <span>Cargando...</span>

  return (
    <div className="app-container">
      <h1>Critoconsul</h1>
      <div className="cripto-container">
      {
        criptos.map(({ id ,name , priceUsd, changePercent24Hr }) => (
          <Cripto key={id} 
            id={id}
            name={name}  
            priceUSD={priceUsd} 
            changePercent24Hr={changePercent24Hr} 
          />
        ))
      }
      </div>
    </div>
  )
}
export default Cuadricula