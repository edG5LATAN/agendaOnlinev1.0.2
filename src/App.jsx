import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './components/inicio/Inicio'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import FooterCarrucel from './components/footerCarrucel/FooterCarrucel.jsx'
import Login from './components/login/Login.jsx'
import SingUp from './components/signUp/SingUp.jsx'
import Crear from './components/crear/Crear.jsx'
import Actualizar from './components/actualizar/Actualizar.jsx'
import Informacion from './components/informacion/Informacion.jsx'
import { Datos } from './contexto/Contexto.jsx'
import { ProtectedRouted } from './components/protected/Protected.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Datos>
          <Header />
          <Routes>
            <Route index element={<Login />} />
            <Route element={<ProtectedRouted />}>
              <Route path='/inicio' element={<Inicio />} />
              <Route path='/crear' element={<Crear />} />
              <Route path='/actualizar/:id' element={<Actualizar />} />
            </Route>
            <Route path='/singnup' element={<SingUp />} />
            <Route path='/informacion' element={<Informacion />} />
          </Routes>
        </Datos>
        <FooterCarrucel />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
