import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Protected = () => {
    const {isloadinguser ,  userdata } = useSelector((state) => state.user)
    return !isloadinguser && localStorage.getItem("token") && userdata ? <Outlet/> : <Navigate to="/login"/>
}

export default Protected
