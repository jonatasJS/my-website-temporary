import I18n from "i18next";
import LanguageD from "i18next-browser-languagedetector";

import { message } from './languages';

I18n
  .use(LanguageD)
  .init({
    debug: false,
    defaultNS: 'translations',
    fallbackLng: 'pt',
    ns: ['translations'],
    resources: message
  });

export { I18n }