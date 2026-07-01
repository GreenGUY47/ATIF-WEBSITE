import { Outlet } from "react-router-dom";
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import WAB from '../../components/WhatsAppButton.jsx'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="relative z-20">
        <Navbar />
      </nav>
      <main className="flex-grow">
        <Outlet />
      </main>
      <WAB />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout