import React from 'react'
import Home from '../home/Home'
import Login from '../login/Login'
import Signup from "../signup/Signup"
import Chat from "../chat/Chat"

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
    {
        path: "/chat",
        element: <Chat />,
    }
]

export default routes;


