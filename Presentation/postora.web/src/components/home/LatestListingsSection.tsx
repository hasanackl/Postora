import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { ListingView } from '../../types/listing'
import { getListings } from '../../api/listings'
import ListingCard from '../listing/ListingCard'

function LatestListingsSection() {
  const { t } = useTranslation()
  const [listings, setListings] = useState<ListingView[]>([])

  useEffect(() => {
    getListings().then((data) => setListings(data))
  }, [])

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-7 pb-14 flex flex-col gap-4">
      <div>
        <h2 className="font-heading text-[26px] font-bold tracking-[-0.5px]">
          {t('home.listings.title')}
        </h2>
        <p className="mt-1 text-sm text-muted">{t('home.listings.subtitle')}</p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  )
}

export default LatestListingsSection