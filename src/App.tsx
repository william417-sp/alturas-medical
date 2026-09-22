import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Citas from './pages/Citas'
import Seguros from './pages/Seguros'
import Contacto from './pages/Contacto'
import Privacidad from './pages/Privacidad'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="citas" element={<Citas />} />
        <Route path="seguros" element={<Seguros />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="privacidad" element={<Privacidad />} />
      </Route>
    </Routes>
  )
}

export default App
