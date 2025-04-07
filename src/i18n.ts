import i18n from 'i18next';
import i18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n.use(i18NextHttpBackend)
    .use(initReactI18next)
    .init({
        lng: 'EN',
        fallbackLng: 'EN',
        backend: {
            loadPath: 'http://localhost:5173/lang/{{lng}}.json'
        }
    });



export default i18n;