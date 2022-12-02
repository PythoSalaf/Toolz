import React from 'react'
import { Navbar, ErrorPage, Footer } from './Components'
import { Routes, Route } from 'react-router-dom'
import { About, Login, Signup, Youtube, Contact, LinkShort, BgRemover } from './Pages'
function App() {
  return (
    <>
     <Navbar />
     <Routes>
      <Route path='/' element={<Youtube />} />
      <Route path='urlshort' element={<LinkShort />} />
      <Route path='removebg' element={<BgRemover />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='*' element={<ErrorPage />} />
     </Routes>
     <Footer />
    </>
  );
}

export default App;
