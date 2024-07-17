import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getProductos } from './services/productsServices'
import ListaProductos from './components/Panel/ListaProductos'
import Inicio from './components/Inicio/Inicio'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Inicio />} />
        <Route path='/admin' element={<ListaProductos />} />
      </Routes>
    </>
  )
}

export default App
