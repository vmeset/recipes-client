import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HOME_ROUTE, LOGIN_ROUTE } from '../../utils/consts'
import { authRoutes, publicRoutes } from '../../routes'

function AppRouter() {

  const isAuth = true

  return (
    <Routes>
      {isAuth && authRoutes.map(({path, Component}) => 
        <Route key={path} element={<Component />} path={path} />
      )}
      {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component />} />
      )}
      <Route path='*' element={
        isAuth 
        ? <Navigate to={HOME_ROUTE} />
        : <Navigate to={LOGIN_ROUTE} />} 
      />
    </Routes>
  )
}

export default AppRouter