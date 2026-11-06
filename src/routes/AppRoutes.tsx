import { Routes, Route, Navigate } from 'react-router'
import Register from '@/pages/Register/Register'

import Login from '@/pages/Login/Login'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  )
}

export default AppRoutes
