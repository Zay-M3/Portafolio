import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const AppLayout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="absolute top-0 left-0 right-0 h-16 bg-black z-[-1]" />
      <div className="pt-15">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout