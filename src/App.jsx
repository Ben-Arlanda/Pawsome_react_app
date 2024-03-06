import Home from './Components/Home'
import SingleDog from './Components/SingleDog'
import Login from './Components/Login'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
 

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:name" element={<SingleDog />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
