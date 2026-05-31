import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import ScrollToTop from '../components/common/ScrollToTop.jsx'

// MainLayout keeps the shared website chrome in one place for all pages.
export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}