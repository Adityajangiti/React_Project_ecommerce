import React from 'react'
import {Route, Routes} from "react-router-dom"
import Login from '../components/Login'
import Register2 from '../components/Register2'

const AuthRouter = () => {
  return (
    <>
    <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register2/>} />
    </Routes>
    </>

  )
}

export default AuthRouter