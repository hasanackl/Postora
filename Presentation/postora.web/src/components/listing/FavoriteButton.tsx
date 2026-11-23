import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../hooks/useAuth'
import { useFavorites } from '../../hooks/useFavorites'

type FavoriteButtonProps = {
  listingId: number
  variant?: 'icon' | 'full'
}

function FavoriteButton({ listingId, variant = 'icon' }: FavoriteButtonProps) {
  const { t } = useTranslation()
  const { user } = useAuth()
  const { isFavorite, toggleFavorite } = useFavorites()
  const navigate = useNavigate()
  const location = useLocation()

  const active = isFavorite(listingId)
  const label = active ? t('favorites.remove') : t('favorites.add')
  const icon = active ? faHeartSolid : faHeart

  function handleClick() {
    if (!user) {
      navigate('/login', { state: { from: location.pathname } })
      return
    }

    toggleFavorite(listingId)
  }

  if (variant === 'full') {
    return (
      <button
        type="button"
        onClick={handleClick}
        className="h-12 flex items-center justify-center gap-2 rounded-xl border border-primary text-primary font-medium"
      >
        <FontAwesomeIcon icon={icon} />
        {label}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      title={label}
      className={`w-9 h-9 grid place-items-center rounded-full bg-white/90 shadow-sm ${active ? 'text-accent' : 'text-primary-dark'}`}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  )
}

export default FavoriteButton