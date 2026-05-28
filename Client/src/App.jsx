import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Kitesurfing from './pages/Kitesurfing.jsx'
import Gallery from './pages/Gallery.jsx'
import Rooms from './pages/Rooms.jsx'
import Packages from './pages/Packages.jsx'
import Activity from './pages/Activity.jsx'
import Dining from './pages/Dining.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/kitesurfing" element={<Kitesurfing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/activities" element={<Activity />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/activity" element={<Navigate to="/activities" replace />} />
        <Route path="/about" element={<Navigate to="/about-us" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
