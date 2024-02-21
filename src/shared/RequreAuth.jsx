import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RequreAuth = () => {
    const location = useLocation()
    const [ email ] = useAuth()


    return(
        email ? <Outlet/> : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequreAuth