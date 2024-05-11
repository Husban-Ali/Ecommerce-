import React from 'react'
import Navbar from '../components/Navbar'
import Last from '../components/Last'
import { Outlet } from 'react-router-dom'


function NavFoot() {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Last/>
   </>
  )
}

export default NavFoot
