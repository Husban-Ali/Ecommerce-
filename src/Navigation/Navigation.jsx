import React from 'react'
import { Route, createBrowserRouter ,createRoutesFromElements ,RouterProvider } from 'react-router-dom'
import NavFoot from '../Layout/NavFoot'
import Home from '../pages/Home'
import AddProduct from '../Form/AddProduct'
import Card from '../components/Card'
import Login from '../Form/Login'
import Signup from '../Form/Signup'
import Cart from '../components/Cart'

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path='' element = {<NavFoot/>}>

           <Route path='/' element = {<Home/>}/>
           <Route path='/Dashboard' element = {<AddProduct/>}/>
           <Route path='/Login' element = {<Login/>}/>
           <Route path='/Signup' element = {<Signup/>}/>
           <Route path='/Cart' element = {<Cart/>}/>
           


            
        </Route>
    )
)
function Navigation() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default Navigation