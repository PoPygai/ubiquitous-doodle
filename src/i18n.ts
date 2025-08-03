import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ru from './locales/ru.json';
import heb from './locales/heb.json';


// Initialize i18next
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
            heb : {translation: heb }
        },
        lng: localStorage.getItem('language') || 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;