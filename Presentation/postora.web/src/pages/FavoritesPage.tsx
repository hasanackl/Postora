import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import type { Listing } from '../types/listing'
import { getListingsByIds } from '../api/listings'
import { useFavorites } from '../hooks/useFavorites'
import ListingCard from '../components/listing/ListingCard'

function FavoritesPage() {
  const { t } = useTranslation()
  const { favoriteIds } = useFavorites()
  const [listings, setListings] = useState<Listing[]>([])

  useEffect(() => {
    getListingsByIds(favoriteIds).then(setListings)
  }, [favoriteIds])

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
        <div className="py-16 flex flex-col items-center text-center gap-2 rounded-[18px] border border-dashed border-line bg-white">
          <FontAwesomeIcon icon={faHeart} className="text-4xl text-primary mb-2" />
          <p className="font-heading text-xl font-bold">{t('favorites.empty')}</p>
          <p className="text-sm text-muted">{t('favorites.emptyText')}</p>
          <Link
            to="/"
            className="mt-3 h-11 px-5 inline-flex items-center rounded-xl bg-primary text-page font-medium hover:bg-primary-dark"
          >
            {t('favorites.browse')}
          </Link>
        </div>
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