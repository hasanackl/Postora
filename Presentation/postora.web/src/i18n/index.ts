import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en } from './en'
import { tr } from './tr'

i18n.use(initReactI18next).init({
  resources: {
    tr: { translation: tr },
    en: { translation: en },
  },
  lng: localStorage.getItem('lang') ?? 'tr',
  fallbackLng: 'tr',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng)
  document.documentElement.lang = lng
})

document.documentElement.lang = i18n.language

export default i18n