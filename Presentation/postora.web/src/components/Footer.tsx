import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const linkClass = 'hover:text-page'

function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-sage">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm">
        <Link to="/" className="font-heading text-lg font-bold text-page">
          postora
        </Link>

        <nav aria-label={t('footer.label')} className="flex flex-wrap gap-x-5 gap-y-1">
          <Link to="/about" className={linkClass}>{t('footer.about')}</Link>
          <Link to="/safe-shopping" className={linkClass}>{t('footer.safeShopping')}</Link>
          <Link to="/help" className={linkClass}>{t('footer.help')}</Link>
          <Link to="/contact" className={linkClass}>{t('footer.contact')}</Link>
        </nav>

        <p className="text-xs">
          © {year} Postora. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}

export default Footer