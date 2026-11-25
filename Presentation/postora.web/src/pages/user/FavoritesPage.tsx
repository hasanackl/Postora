import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useAppData } from '../../hooks/useAppData'
import { useFavorites } from '../../hooks/useFavorites'
import { selectListingsByIds } from '../../store/selectors'
import ListingCard from '../../components/listing/ListingCard'
import EmptyState from '../../components/common/EmptyState'
import { getButtonClass } from '../../constants/buttonStyles'

function FavoritesPage() {
  const { t } = useTranslation()
  const { data } = useAppData()
  const { favoriteIds } = useFavorites()
  const listings = selectListingsByIds(data, favoriteIds)

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-7 pb-14 flex flex-col gap-4">
      <div>
        <h1 className="font-heading text-[26px] font-bold tracking-[-0.5px]">
          {t('favorites.title')}
        </h1>
        <p className="mt-1 text-sm text-muted">
          {t('favorites.count', { count: listings.length })}
        </p>
      </div>

      {listings.length === 0 ? (
        <EmptyState
          icon={faHeart}
          title={t('favorites.empty')}
          text={t('favorites.emptyText')}
          action={
            <Link to="/" className={getButtonClass()}>
              {t('favorites.browse')}
            </Link>
          }
        />
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </section>
  )
}

export default FavoritesPage