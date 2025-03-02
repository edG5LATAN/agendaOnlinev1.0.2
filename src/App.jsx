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


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/singnup' element={<SingUp />} /> 
          <Route path='/' element={<Inicio />} />
          <Route path='/crear' element={<Crear />} />
          <Route path='/actualizar' element={<Actualizar />}/>
          <Route path='/informacion' element={<Informacion />} />
        </Routes>
        <FooterCarrucel />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
