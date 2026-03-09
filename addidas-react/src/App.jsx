import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shoes from './pages/Shoes'
import Mens from './pages/Mens'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
