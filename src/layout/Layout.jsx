import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import './../style/main.css'

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Header />    
        <main className='layout-content'>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout