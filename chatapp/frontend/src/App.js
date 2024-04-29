import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
import React from 'react';
import Routes from './components/routes/routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(Routes);

function App() {

  return (
    <div >
      <ToastContainer  position='top-center'/>
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
