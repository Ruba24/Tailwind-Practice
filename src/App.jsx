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
import RegistrationPage from './Pages/RegistrationPage'
import MyShipment from './Pages/MyShipment';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <HeroSection />
          <Cards />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <NavBar />
          <About />
        </>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <>
          <NavBar />
          <ContactUs />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <NavBar />
          <Login />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <NavBar />
          <RegistrationPage />
        </>
      ),
    },
    {
         path: "/my-shipments",
          element: (
            <>
              <NavBar />
              <MyShipment />
            </>
  )
}

  ]);

  return <RouterProvider router={router} />;
}

export default App