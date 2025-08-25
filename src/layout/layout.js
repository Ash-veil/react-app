import React from 'react'
import NavBar from '../components/navBar'
import SideBar from '../components/sideBar'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
 <div>
  <NavBar />
  <div id="layoutSidenav">
    <SideBar />
    <div id="layoutSidenav_content">
      <main>
        <Outlet />
      </main>
     <Footer />
    </div>
  </div>
</div>
  )
}

export default Layout