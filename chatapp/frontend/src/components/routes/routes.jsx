import React from 'react'
import Home from '../home/Home'
import Login from '../login/Login'
import Signup from "../signup/Signup"

const routes = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
]

export default routes;


