import { useContext } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigationbar from './components/Navigationbar'
import { UserContext } from './App'
import Inicio from './components/Inicio'
import Registro from './components/Registro'
import Home from './components/Home'

function RoutesComp() {
  const userContext = useContext(UserContext)
  return (
    <BrowserRouter>
    <Navigationbar/>
      <Routes>
        {userContext.email && (
          <Route path='/' element={<Home/>} />
        )}
        {!userContext.email && (
          <>
            <Route path='/' element={<Inicio/>} />
            <Route path='/registro' element={<Registro />} />
          </>
        )}
      </Routes>
      </BrowserRouter>
  )
}

export default RoutesComp
