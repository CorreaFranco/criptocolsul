import Header from "./components/header/Header"
import Calculator from "./components/calculadora/calculator"

function App() {
  return (
    <>
    <Header/>
      <main>
        <h2>Calculadora</h2>
        <Calculator nombre="Prueba calculadora" />
      </main>
    </>
  )
}

export default App