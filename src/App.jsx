import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Shop from './Components/Shop'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div >
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
