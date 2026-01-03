import routes, { namespaces } from '../routes/locales.routes';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import i18n from 'i18next';

export const languages = { availables: ['en'], default: 'en' };

i18n
  .use(Backend) // load translations using http default public/assets/locales)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    detection: { checkWhitelist: true }, // options for language detection
    interpolation: { escapeValue: false }, // react already does escaping
    fallbackLng: languages.availables, 
    whitelist: languages.availables,
    supportedLngs: languages.availables,
    //load: 'languageOnly',
    debug: false,

    ns: namespaces,
    defaultNS: routes.common,
  });

export default i18n;
