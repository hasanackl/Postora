import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/layout/ScrollToTop'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'
import ProtectedRoute from './components/routes/ProtectedRoute'
import AdminRoute from './components/routes/AdminRoute'
import HomePage from './pages/public/HomePage'
import ListingDetailPage from './pages/public/ListingDetailPage'
import LoginPage from './pages/public/LoginPage'
import RegisterPage from './pages/public/RegisterPage'
import NotFoundPage from './pages/public/NotFoundPage'
import FavoritesPage from './pages/user/FavoritesPage'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings/:id" element={<ListingDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/listings/new" element={<NotFoundPage />} />
            <Route path="/my-listings" element={<NotFoundPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/orders" element={<NotFoundPage />} />
          </Route>

          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<NotFoundPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App