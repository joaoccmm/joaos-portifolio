import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './utils/locales/en/translation.json';
import ptTranslation from './utils/locales/pt/translation.json';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'pt',
    fallbackLng: 'pt',
    resources: {
      en: {
        translation: enTranslation,
      },
      pt: {
        translation: ptTranslation,
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;