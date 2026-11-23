import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Category } from '../../types/category'
import { getCategories } from '../../api/categories'
import { CATEGORY_ICONS, DEFAULT_CATEGORY_ICON } from '../../constants/categoryIcons'

function CategoriesSection() {
  const { t, i18n } = useTranslation()
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getCategories().then((data) => setCategories(data))
  }, [])

  const isTr = i18n.language === 'tr'

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-8 pb-2 flex flex-col gap-4">
      <h2 className="font-heading text-[26px] font-bold tracking-[-0.5px]">
        {t('home.categories.title')}
      </h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/categories/${category.slug}`}
            className="flex flex-col items-center gap-2.5 px-2 py-[18px] rounded-2xl border border-line bg-white text-sm font-medium hover:border-primary"
          >
            <span className="w-[46px] h-[46px] flex items-center justify-center rounded-[14px] bg-mint text-primary text-xl">
              <FontAwesomeIcon icon={CATEGORY_ICONS[category.icon] ?? DEFAULT_CATEGORY_ICON} />
            </span>
            {isTr ? category.nameTr : category.nameEn}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoriesSection