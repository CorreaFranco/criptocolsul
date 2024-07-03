// import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./main.css"

import App from './components/App'
import Home from './Home.jsx'
import Cuadricula from './components/Cuadricula.jsx'
import CriptoPage from './components/cripto/CriptoPage.jsx'

import Pagina404 from './Pagina404.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />  {/* index es como decirle que es el */}
            </Route>
            <Route path='/criptomonedas' element={<App />}>
                <Route index element={<Cuadricula />} />
                <Route path=':id' element={<CriptoPage />} / >
            </Route>
            <Route path='*' element={<Pagina404 />} / >
        </Routes>
    </BrowserRouter>
)

