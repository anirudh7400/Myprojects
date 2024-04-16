import './App.css';
import Firstpage from './Components/Firstpage/Firstpage'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Explore from './Components/Explore/Explore';
import Bookmark from './Components/Bookmark/Bookmark';
import Notification from './Components/Notification/Notification'
import List from './Components/List/List';
import Message from './Components/Message/Message'
import Profile from './Components/Profile/Profile'
import More from './Components/More/More'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";





const router = createBrowserRouter([
  {
    path: '/',
    element: <Firstpage />,
    errorElement: <h2>404 error</h2>
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <h2>404 error</h2>
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <h2>404 error</h2>
  },
  {
    path: '/Home',
    element: <Home />,
    errorElement: <h2>404 error</h2>
  },
  {
    path: '/Explore',
    element: <Explore />,
    errorElement: <h2>404 error</h2>
  },
  {
    path: '/Bookmark',
    element: <Bookmark />,
    errorElement: <h2>404 error</h2>
  },
  {
    path: '/Notification',
    element: <Notification />,
    errorElement: <h2>404 error</h2>
  },
  {
    path: '/List',
    element: <List />,
    errorElement: <h2>404 error</h2>
  },
  {
    path: '/Profile',
    element: <Profile />,
    errorElement: <h2>404 error</h2>
  },
  {
    path: '/Message',
    element: <Message />,
    errorElement: <h2>404 error</h2>
  },
  {
    path: '/More',
    element: <More />,
    errorElement: <h2>404 error</h2>
  }
])

function App() {

  return (
    <div className="app">

      
      <ToastContainer position='top-center'/>
      
     <RouterProvider router={router} />
    
    </div>
  );
}

export default App;