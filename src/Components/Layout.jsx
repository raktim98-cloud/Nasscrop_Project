import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"


Outlet
function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
    
  )
}

export default Layout