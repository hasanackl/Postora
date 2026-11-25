import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faCartShopping, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { useAppData } from '../../hooks/useAppData'
import { selectListingDetail } from '../../store/selectors'
import { formatPrice } from '../../utils/formatPrice'
import { formatDate } from '../../utils/date'
import { getInitials } from '../../utils/getInitials'
import NotFoundPage from './NotFoundPage'
import FavoriteButton from '../../components/listing/FavoriteButton'
import Badge from '../../components/common/Badge'
import Button from '../../components/common/Button'

const boxClass = 'p-[22px] rounded-[18px] border border-line bg-white'
const rowClass = 'flex justify-between gap-3 py-2.5 border-b border-line last:border-b-0 text-sm'

function ListingDetailPage() {
  const { id } = useParams()
  const { t, i18n } = useTranslation()
  const { data } = useAppData()
  const listing = selectListingDetail(data, Number(id))

  if (!listing) {
    return <NotFoundPage />
  }

  const isTr = i18n.language === 'tr'
  const categoryName = isTr ? listing.categoryNameTr : listing.categoryNameEn
  const coverPhoto = listing.photos[0]

  return (
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-5 pb-14 flex flex-col gap-5">

      <nav aria-label={t('listingDetail.breadcrumb')} className="flex flex-wrap gap-2 text-sm text-muted">
        <Link to="/" className="text-primary hover:underline">{t('listingDetail.home')}</Link>
        <span>/</span>
        <span>{categoryName}</span>
        <span>/</span>
        <span className="text-ink">{listing.title}</span>
      </nav>

      <div className="flex flex-wrap items-start gap-6">

        <div className="flex-[999_1_560px] min-w-0 flex flex-col gap-5">
          <div className="p-3 rounded-[18px] border border-line bg-white">
            <div className="relative h-72 sm:h-[440px] flex items-center justify-center overflow-hidden rounded-[14px] bg-mint text-primary text-7xl">
              {coverPhoto ? (
                <img src={coverPhoto} alt={listing.title} className="w-full h-full object-cover" />
              ) : (
                <FontAwesomeIcon icon={faCamera} />
              )}
              {listing.photos.length > 0 && (
                <span className="absolute right-3.5 bottom-3.5 px-2.5 py-1 flex items-center gap-1.5 rounded-lg bg-ink/75 text-white text-[13px]">
                  <FontAwesomeIcon icon={faCamera} />
                  {listing.photos.length}
                </span>
              )}
            </div>
          </div>

          <div className={boxClass}>
            <h2 className="font-heading text-[22px] font-bold">{t('listingDetail.description')}</h2>
            <p className="mt-2.5 max-w-[68ch] leading-[1.7]">{listing.description}</p>
          </div>
        </div>

        <aside className="flex-[1_1_340px] min-w-0 flex flex-col gap-4">
          <div className={`${boxClass} flex flex-col gap-3.5`}>
            <div className="flex flex-wrap gap-2">
                <div className="flex flex-wrap gap-2">
                    <Badge tone="mint">{t('listingDetail.published')}</Badge>
                    <Badge tone="sand">{t('listingDetail.fromOwner')}</Badge>
                </div>
            </div>

            <h1 className="font-heading text-[28px] font-bold leading-[1.15] tracking-[-0.5px] text-balance">
              {listing.title}
            </h1>

            <p className="font-heading text-4xl font-bold text-primary tabular-nums">
              {formatPrice(listing.price)}
            </p>

            <dl>
              <div className={rowClass}>
                <dt className="text-muted">{t('listingDetail.listingNo')}</dt>
                <dd className="tabular-nums">{listing.id}</dd>
              </div>
              <div className={rowClass}>
                <dt className="text-muted">{t('listingDetail.date')}</dt>
                <dd>{formatDate(listing.createdDate, i18n.language)}</dd>
              </div>
              <div className={rowClass}>
                <dt className="text-muted">{t('listingDetail.category')}</dt>
                <dd>{categoryName}</dd>
              </div>
              <div className={rowClass}>
                <dt className="text-muted">{t('listingDetail.location')}</dt>
                <dd>{listing.cityName}</dd>
              </div>
            </dl>

            <Button variant="accent" size="lg">
                 <FontAwesomeIcon icon={faCartShopping} />
                 {t('listingDetail.order')}
            </Button>
            <FavoriteButton listingId={listing.id} variant="full" />
          </div>

          <div className={`${boxClass} flex items-center gap-3.5`}>
            <span className="w-[52px] h-[52px] shrink-0 flex items-center justify-center rounded-full bg-primary text-sand font-heading text-xl font-bold">
              {getInitials(listing.sellerName)}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-medium">{listing.sellerName}</p>
              <p className="text-[13px] text-muted">
                {t('listingDetail.memberSince', {
                  year: listing.sellerMemberSince,
                  count: listing.sellerListingCount,
                })}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 px-[18px] py-4 rounded-[18px] bg-mint text-primary-dark text-sm leading-normal">
            <FontAwesomeIcon icon={faShieldHalved} className="mt-0.5 text-lg" />
            <p>{t('listingDetail.safety')}</p>
          </div>
        </aside>

      </div>
    </div>
  )
}

export default ListingDetailPage