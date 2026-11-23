import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-16 text-center">
      <p className="font-heading text-6xl font-bold text-primary">404</p>
      <p className="mt-3 text-muted">Aradığın sayfa bulunamadı.</p>
      <Link
        to="/"
        className="inline-flex mt-6 h-11 px-5 items-center rounded-xl bg-primary text-white font-medium"
      >
        Ana sayfaya dön
      </Link>
    </div>
  )
}

export default NotFoundPage