import { useState } from 'react'
import Home from './pages/Home'
import Nav from './components/Nav'
import Person from './components/Person'
import Category from './components/Category'
import Feature from './components/Feature'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './pages/Blog'
import JobDetails from './pages/JobDetails'
import Appliedjobs from './pages/Appliedjobs'
import Statistics from './components/Statistics'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,

  },
  {
    path: "/blog",
    element: <Blog/>,

  }
  ,
  {
    path: "/job/:id",
    element: <JobDetails/>,

  }
  ,
  {
    path: "/statistics",
    element: <Statistics/>,

  }
]
);





function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Nav></Nav>
  

    <RouterProvider router={router} >
    
  

    </RouterProvider>

    </>
  
  );
}

export default App
