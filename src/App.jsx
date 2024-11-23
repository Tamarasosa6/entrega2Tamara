import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Welcome from './components/Welcome/Welcome'
import Mensaje from './components/Mensaje/Mensaje'

import SignUp from './pages/SignUp/SignUp'
import Contacto from './pages/Contacto/Contacto'
import Carrito from './pages/Carrito/Carrito'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'

function App() {
 
  return (
    <BrowserRouter>
        <header className="imagen">
            <NavBar />
            <Mensaje />
            <Welcome /> 
        </header>
        <Routes>
            <Route path='/signup' element={<SignUp />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/product/:productId" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<h2> 404 | Not Found</h2>} />     
        </Routes>
  </BrowserRouter>
  )

}

export default App
