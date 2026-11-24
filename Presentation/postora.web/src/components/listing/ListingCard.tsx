import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import type { ListingView } from '../../types/listing'
import { formatPrice } from '../../utils/formatPrice'
import { getDaysAgo } from '../../utils/date'
import FavoriteButton from './FavoriteButton'

type ListingCardProps = {
  listing: ListingView
}

function ListingCard({ listing }: ListingCardProps) {
  const { t, i18n } = useTranslation()
  const isTr = i18n.language === 'tr'
  const daysAgo = getDaysAgo(listing.createdDate)
  const coverPhoto = listing.photos[0]

  let dateLabel = t('listing.daysAgo', { count: daysAgo })
  if (daysAgo === 0) dateLabel = t('listing.today')
  if (daysAgo === 1) dateLabel = t('listing.yesterday')

  return (
    <div className="relative flex flex-col overflow-hidden rounded-[18px] border border-line bg-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-18px_rgba(10,51,40,0.45)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <Link to={`/listings/${listing.id}`} className="flex flex-col flex-1">
        <div className="relative h-40 flex items-center justify-center bg-mint text-primary text-4xl">
          {coverPhoto ? (
            <img src={coverPhoto} alt="" className="w-full h-full object-cover" />
          ) : (
            <FontAwesomeIcon icon={faCamera} />
          )}

          {daysAgo === 0 && (
            <span className="absolute left-3 top-3 px-2.5 py-1 rounded-full bg-accent text-white text-xs font-medium">
              {t('listing.new')}
            </span>
          )}

          {listing.photos.length > 0 && (
            <span className="absolute left-3 bottom-3 px-2 py-0.5 flex items-center gap-1.5 rounded-md bg-ink/70 text-white text-xs">
              <FontAwesomeIcon icon={faCamera} />
              {listing.photos.length}
            </span>
          )}
        </div>

        <div className="px-4 pt-3.5 pb-1.5 flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-[0.8px] text-muted">
            {isTr ? listing.categoryNameTr : listing.categoryNameEn}
          </span>
          <span className="text-[15px] font-medium leading-snug">{listing.title}</span>
          <span className="flex items-center gap-1.5 text-[13px] text-muted">
            <FontAwesomeIcon icon={faLocationDot} />
            {listing.cityName} · {dateLabel}
          </span>
        </div>

        <div className="mt-auto px-4 pt-3 pb-3.5 border-t-[1.5px] border-dashed border-line font-heading text-xl font-bold text-primary tabular-nums">
          {formatPrice(listing.price)}
        </div>
      </Link>

      <div className="absolute right-3 top-3">
        <FavoriteButton listingId={listing.id} />
      </div>
    </div>
  )
}

export default ListingCard