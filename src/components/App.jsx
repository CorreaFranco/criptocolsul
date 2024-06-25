import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Cripto from "./Critpo"
import "./App.css"

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data)
        console.log(data.data.data)
      })
      .catch(() =>{
        console.log("La peticion fallo")
      })
  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <div className="app-container">
      <h1>Critoconsul</h1>
      <div className="cripto-container">
      {
        criptos.map(({ id ,name , priceUsd, changePercent24Hr }) => (
          <Cripto key={id} name={name}  priceUSD={priceUsd} changePercent24Hr={changePercent24Hr} />
        ))
      }
      </div>
    </div>
  )
}
export default App