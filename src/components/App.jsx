import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data)
      })
      .catch(() =>{
        console.log("La peticion fallo")
      })
  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Critoconsul</h1>
      <ol>
        {
          criptos.map(({ id ,name, priceUSD}) => (
            <li key={id}>Nombre: {name}  Precio:{priceUSD}</li>
          ))
        }
      </ol>
    </>
  )
}
export default App