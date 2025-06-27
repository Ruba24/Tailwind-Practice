import React from 'react' 
// import './App.css' 
import NavBar from './Components/NavBar' 
import HeroSection from './Components/HeroSection' 
import Cards from './Components/cards'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs'
import Login from './Pages/Login'
function App() {
    const router = createBrowserRouter([
    {
        path: "/login",
    element: <><NavBar /> <Login /> </>    
    }, 
    {
        path: "/",
        element: <><NavBar /> <Home /> </>  
    },
    {
        path: "/About",
        element: <><NavBar /> <About /> </>  
    },
    {
        path: "/contact-us",
        element: <> <ContactUs /> </>  
    }
  ])

return ( <> <HeroSection /> <Cards />
    <RouterProvider router={router} />
    </> ) }

export default App