import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'

import About from './pages/About'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Error from './pages/Error'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
