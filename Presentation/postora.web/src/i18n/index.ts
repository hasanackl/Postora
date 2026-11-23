import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en } from './en'
import { tr } from './tr'
import { readStorage, writeStorage } from '../lib/storage'
import { STORAGE_KEYS } from '../constants/storageKeys'

const SUPPORTED_LANGUAGES = ['tr', 'en']

const savedLanguage = readStorage<string>(STORAGE_KEYS.language, 'tr')
const initialLanguage = SUPPORTED_LANGUAGES.includes(savedLanguage) ? savedLanguage : 'tr'

i18n.use(initReactI18next).init({
  resources: {
    tr: { translation: tr },
    en: { translation: en },
  },
  lng: initialLanguage,
  fallbackLng: 'tr',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  writeStorage(STORAGE_KEYS.language, lng)
  document.documentElement.lang = lng
})

document.documentElement.lang = i18n.language

export default i18n