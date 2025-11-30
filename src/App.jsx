import { useState } from 'react'
import './css/App.css'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Favourite from './pages/Favourites'
import Aurora from './components/Background.jsx'
import NavBar from './components/NavBar.jsx'
import { MovieProvider } from './contexts/MovieContext.jsx'







function App() {
  const [count, setCount] = useState(0)
  

  return (
    <MovieProvider>
    <NavBar />
    <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

    <main className= "main-content">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourites' element={<Favourite/>}/>
      </Routes>
    </main>    
    </MovieProvider>
    
  )
}

export default App
