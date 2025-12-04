import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
      <Header/>
      <div className='h-screen flex '>
<SideBar/>
<main>
    <Outlet/>
</main>
      </div>
    </div>
  )
}

export default DashboardLayout
