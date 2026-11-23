import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXmark,
  faHouse,
  faTableCellsLarge,
  faPlus,
  faList,
  faBoxOpen,
  faShieldHalved,
  faCircleQuestion,
  faEnvelope,
  faGlobe,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useAuth } from '../../hooks/useAuth'
import { getInitials } from '../../utils/getInitials'

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
}

const labelClass = 'px-3.5 pt-4 pb-1.5 text-xs font-medium uppercase tracking-wider text-muted'
const linkClass = 'flex items-center gap-3.5 h-[46px] px-3.5 rounded-xl font-medium hover:bg-page'
const iconClass = 'w-5 text-primary'
const langActive = 'bg-primary text-white'
const langPassive = 'text-muted'

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { t, i18n } = useTranslation()
  const isTr = i18n.language === 'tr'
  const { user, logout } = useAuth()

  function handleLogout() {
    logout()
    onClose()
  }

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-primary-dark/55 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        aria-label={t('sidebar.mainMenu')}
        inert={!isOpen}
        className={`fixed top-0 bottom-0 left-0 z-50 w-[min(340px,88%)] bg-white rounded-r-[22px] flex flex-col overflow-y-auto transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-[18px] pt-[18px] pb-3.5">
          <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
            <span className="w-9 h-9 flex items-center justify-center rounded-[10px] bg-primary text-sand font-heading text-xl font-bold outline-2 outline-dashed outline-primary outline-offset-3">
              p
            </span>
            <span className="font-heading text-[22px] font-bold text-primary-dark">postora</span>
          </Link>
          <button
            onClick={onClose}
            aria-label={t('sidebar.closeMenu')}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-page text-lg"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {user ? (
          <div className="mx-3.5 p-3.5 rounded-2xl bg-mint text-primary-dark flex items-center gap-3">
            <span className="w-11 h-11 shrink-0 rounded-full bg-primary text-sand grid place-items-center font-heading font-bold">
              {getInitials(user.fullName)}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-heading font-bold truncate">{user.fullName}</p>
              <p className="text-xs">
                {user.role === 'admin' ? t('sidebar.roleAdmin') : t('sidebar.roleUser')}
              </p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              aria-label={t('sidebar.logout')}
              title={t('sidebar.logout')}
              className="w-10 h-10 shrink-0 rounded-xl bg-white grid place-items-center text-primary"
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
          </div>
        ) : (
          <div className="mx-3.5 p-3.5 rounded-2xl bg-mint text-primary-dark flex flex-col gap-2.5">
            <p className="font-heading text-[17px] font-bold">{t('sidebar.welcomeTitle')}</p>
            <p className="text-sm leading-snug">{t('sidebar.welcomeText')}</p>
            <div className="flex gap-2">
              <Link to="/login" onClick={onClose} className="flex-1 h-[42px] flex items-center justify-center rounded-[11px] bg-primary text-white text-sm font-medium">
                {t('sidebar.login')}
              </Link>
              <Link to="/register" onClick={onClose} className="flex-1 h-[42px] flex items-center justify-center rounded-[11px] border border-primary bg-white text-primary text-sm font-medium">
                {t('sidebar.register')}
              </Link>
            </div>
          </div>
        )}

        <nav className="px-2.5 py-2 flex flex-col">
          <p className={labelClass}>{t('sidebar.explore')}</p>
          <Link to="/" onClick={onClose} className={linkClass}>
            <FontAwesomeIcon icon={faHouse} className={iconClass} />
            {t('sidebar.home')}
          </Link>
          <Link to="/categories" onClick={onClose} className={linkClass}>
            <FontAwesomeIcon icon={faTableCellsLarge} className={iconClass} />
            {t('sidebar.categories')}
          </Link>

          <p className={labelClass}>{t('sidebar.account')}</p>
          <Link to="/listings/new" onClick={onClose} className={linkClass}>
            <FontAwesomeIcon icon={faPlus} className={iconClass} />
            {t('sidebar.postListing')}
          </Link>
          <Link to="/my-listings" onClick={onClose} className={linkClass}>
            <FontAwesomeIcon icon={faList} className={iconClass} />
            {t('sidebar.myListings')}
          </Link>
          <Link to="/favorites" onClick={onClose} className={linkClass}>
            <FontAwesomeIcon icon={faHeart} className={iconClass} />
            {t('sidebar.favorites')}
          </Link>
          <Link to="/orders" onClick={onClose} className={linkClass}>
            <FontAwesomeIcon icon={faBoxOpen} className={iconClass} />
            {t('sidebar.orders')}
          </Link>
          {user?.role === 'admin' && (
            <Link to="/admin" onClick={onClose} className={linkClass}>
              <FontAwesomeIcon icon={faShieldHalved} className={iconClass} />
              {t('sidebar.adminPanel')}
            </Link>
          )}

          <p className={labelClass}>{t('sidebar.support')}</p>
          <Link to="/help" onClick={onClose} className={linkClass}>
            <FontAwesomeIcon icon={faCircleQuestion} className={iconClass} />
            {t('sidebar.help')}
          </Link>
          <Link to="/contact" onClick={onClose} className={linkClass}>
            <FontAwesomeIcon icon={faEnvelope} className={iconClass} />
            {t('sidebar.contact')}
          </Link>
        </nav>

        <div className="mt-auto px-[18px] pt-3.5 pb-5 border-t border-line flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 text-sm text-muted">
            <FontAwesomeIcon icon={faGlobe} />
            {t('sidebar.language')}
          </span>
          <div className="flex p-[3px] rounded-full border border-line">
            <button
              onClick={() => i18n.changeLanguage('tr')}
              className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium ${isTr ? langActive : langPassive}`}
            >
              Türkçe
            </button>
            <button
              onClick={() => i18n.changeLanguage('en')}
              className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium ${isTr ? langPassive : langActive}`}
            >
              English
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
