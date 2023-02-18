import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from "../Components"
const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default SharedLayout