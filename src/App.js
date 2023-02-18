import React from 'react'
import { ErrorPage, ForgetPassword, NewPassword, SharedLayout } from './Components'
import { Routes, Route } from 'react-router-dom'
import { About, Youtube, Contact, LinkShort, BgRemover } from './Pages'
import {  Login, Signup } from './Auth'
function App() {
  return (
    <>
     
     <Routes>
      <Route path='/' element={<SharedLayout />} >
        <Route index element={<Youtube />} />
      <Route path='urlshort' element={<LinkShort />} />
      <Route path='removebg' element={<BgRemover />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='resetpassword' element={<ForgetPassword />} />
      <Route path='setpassword' element={<NewPassword />} />
      <Route path='*' element={<ErrorPage />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
     </Routes>
     
    </>
  );
}

export default App;
