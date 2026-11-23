import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { useAuth } from '../hooks/useAuth'

type HeaderProps = {
  onMenuClick: () => void
}

const langActive = 'bg-primary text-white'
const langPassive = 'text-muted'

function Header({ onMenuClick }: HeaderProps) {
  const { t, i18n } = useTranslation()
  const { user, logout } = useAuth()
  const isTr = i18n.language === 'tr'

  return (
    <header className="bg-white border-b border-line">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3 lg:py-4 flex flex-wrap items-center gap-3 lg:gap-4">

        <button
          onClick={onMenuClick}
          aria-label={t('header.openMenu')}
          className="order-1 w-11 h-11 flex items-center justify-center rounded-xl border border-line text-lg text-primary-dark"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <Link to="/" className="order-2 flex items-center gap-2.5">
          <span className="w-[38px] h-[38px] flex items-center justify-center rounded-[11px] bg-primary text-sand font-heading text-[22px] font-bold outline-2 outline-dashed outline-primary outline-offset-3">
            p
          </span>
          <span className="hidden sm:inline font-heading text-2xl font-bold text-primary-dark">postora</span>
        </Link>

        <form className="order-4 lg:order-3 w-full lg:w-auto lg:flex-1 h-12 flex items-center rounded-[14px] border-[1.5px] border-primary bg-white overflow-hidden">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-3.5 text-muted" />
          <input
            type="text"
            placeholder={t('header.searchPlaceholder')}
            className="flex-1 min-w-0 h-full px-3 outline-none"
          />
          <button type="submit" className="h-full px-[22px] bg-primary text-white font-medium">
            {t('header.search')}
          </button>
        </form>

        <nav className="order-3 lg:order-4 ml-auto lg:ml-0 flex items-center gap-2">
          <div className="hidden md:flex p-[3px] rounded-full border border-line">
            <button
              onClick={() => i18n.changeLanguage('tr')}
              className={`px-3 py-1.5 rounded-full text-[13px] font-medium ${isTr ? langActive : langPassive}`}
            >
              TR
            </button>
            <button
              onClick={() => i18n.changeLanguage('en')}
              className={`px-3 py-1.5 rounded-full text-[13px] font-medium ${isTr ? langPassive : langActive}`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => i18n.changeLanguage(isTr ? 'en' : 'tr')}
            aria-label={t('header.switchLanguage')}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl border border-line text-[13px] font-medium text-primary-dark"
          >
            {isTr ? 'EN' : 'TR'}
          </button>

          <Link
            to="/favorites"
            aria-label={t('header.favorites')}
            className="w-11 h-11 flex items-center justify-center rounded-xl text-lg text-primary-dark"
          >
            <FontAwesomeIcon icon={faHeart} />
          </Link>

          {user ? (
            <>
              <span className="hidden sm:inline font-medium">{user.fullName}</span>
              <button
                type="button"
                onClick={logout}
                aria-label={t('header.logout')}
                title={t('header.logout')}
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-line text-lg text-primary-dark"
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
              </button>
            </>
          ) : (
            <Link
              to="/login"
              aria-label={t('header.login')}
              className="h-11 w-11 sm:w-auto sm:px-[18px] inline-flex items-center justify-center gap-2 rounded-xl border border-line font-medium"
            >
              <FontAwesomeIcon icon={faUser} className="sm:hidden text-lg text-primary-dark" />
              <span className="hidden sm:inline">{t('header.login')}</span>
            </Link>
          )}

          <Link
            to="/listings/new"
            aria-label={t('header.postListing')}
            className="h-11 px-3 sm:px-[18px] inline-flex items-center gap-2 rounded-xl bg-accent text-white font-medium"
          >
            <FontAwesomeIcon icon={faPlus} />
            <span className="hidden sm:inline">{t('header.postListing')}</span>
          </Link>
        </nav>

      </div>
    </header>
  )
}

export default Header