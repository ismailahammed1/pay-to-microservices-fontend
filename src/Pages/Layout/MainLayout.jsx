import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Foter'
import Navbar from '../../components/navbar/Navbar'

const MainLayout = () => {
  return (
    <div className='mainLayout'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout