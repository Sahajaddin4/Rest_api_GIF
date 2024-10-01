import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom';
// import './Layout.css';
function Layout() {
  return (
    <div className='layout mx-auto'>
        <Navbar />
        <div >
          <Outlet />
        </div>
    </div>
  )
}

export default Layout