import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Home from './pages/Home.jsx'
import Cars from './pages/Cars.jsx'
import Categories from './pages/Categories.jsx'
import About from './pages/About.jsx'
import './Header.css'

function Header() {

  return (
    <>
      <Router>
        <header>
            <div className="container">
                <h1>Carros Fenomenais</h1>
            </div>

            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}> Home</NavLink>
                <NavLink to="/cars" className={({ isActive }) => isActive ? "active" : ""}>Carros</NavLink>
                <NavLink to="/categories" className={({ isActive }) => isActive ? "active" : ""}>Categorias</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>Sobre nós</NavLink>
            </nav>

        </header>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="cars" element={<Cars/>} />
            <Route path="categories" element={<Categories/>} />
            <Route path="about" element={<About/>} />
        </Routes>
      </Router>
    </>
  )
}

export default Header