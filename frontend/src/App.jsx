
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import Service from './pages/service';
import Contact from './pages/contact';
import Login from './pages/login';
import Protfolio from './pages/protofolio'
function App() {

  return (
    <>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<Login/>} />
      <Route path="/protfolio" element={<Protfolio/>} />
      <Route path="/login" element={<Login/>} />

    </Routes>
      
    </>
  )
}

export default App
