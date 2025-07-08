import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import './../style/main.css'

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Header />    
        <div className="absolute top-0 left-0 right-0 h-16 bg-black z-[-1]" />
        <div className="pt-15">{children}</div>
        <Footer />
    </div>
  )
}

export default Layout