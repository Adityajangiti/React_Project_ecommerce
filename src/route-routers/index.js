import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import CoreRouter from '../core/routers/CoreRouter'
import AuthRouter from '../auth/routers/AuthRouter'
import DashboardRouter from '../dashboard/Routers/DashboardRouter'


const index = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<CoreRouter />} />
        <Route path="/auth/*" element={<AuthRouter />} /> 
        <Route path="dashboard" element={<DashboardRouter />} />
        
    </Routes>
    </>
  )
}

export default index