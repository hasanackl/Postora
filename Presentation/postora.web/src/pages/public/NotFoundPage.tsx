import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { faSignsPost } from '@fortawesome/free-solid-svg-icons'
import EmptyState from '../../components/common/EmptyState'
import { getButtonClass } from '../../constants/buttonStyles'

function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12">
      <EmptyState
        icon={faSignsPost}
        title={t('notFound.title')}
        text={t('notFound.text')}
        action={
          <Link to="/" className={getButtonClass()}>
            {t('common.backHome')}
          </Link>
        }
      />
    </div>
  )
}

export default NotFoundPage