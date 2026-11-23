import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faHouse, faHeart } from '@fortawesome/free-solid-svg-icons'

function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-primary text-page overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-8 lg:py-10 flex items-center gap-10">

        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <span className="self-start px-3 py-1.5 rounded-full border border-dashed border-peach text-peach text-[13px] font-medium uppercase tracking-[1.2px]">
            {t('home.hero.badge')}
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-1px] text-balance">
            {t('home.hero.title')}
          </h1>
          <p className="max-w-[520px] text-base lg:text-lg leading-relaxed text-sage">
            {t('home.hero.text')}
          </p>
        </div>

        <div aria-hidden="true" className="hidden lg:block relative w-[400px] shrink-0 h-60">
          <div className="absolute left-[4%] top-6 w-[58%] p-2.5 rounded-[18px] bg-white text-ink -rotate-5">
            <div className="h-[110px] flex items-center justify-center rounded-xl bg-sand text-accent text-4xl">
              <FontAwesomeIcon icon={faCar} />
            </div>
            <p className="px-1 pt-2 font-medium">Renault Clio 1.0 TCe</p>
            <p className="px-1 font-heading text-lg font-bold text-primary">685.000 TL</p>
          </div>

          <div className="absolute right-[2%] top-0 w-[46%] p-2.5 rounded-[18px] bg-white text-ink rotate-4">
            <div className="h-[90px] flex items-center justify-center rounded-xl bg-mint text-primary text-[34px]">
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <p className="px-1 pt-2 text-sm font-medium">{t('home.hero.sampleFlat')}</p>
            <p className="px-1 font-heading text-base font-bold text-primary">17.500 TL</p>
          </div>

          <div className="absolute right-[10%] bottom-0 px-4 py-2.5 flex items-center gap-2.5 rounded-[14px] bg-accent text-white text-sm font-medium -rotate-2">
            <FontAwesomeIcon icon={faHeart} />
            {t('home.hero.favorited')}
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection