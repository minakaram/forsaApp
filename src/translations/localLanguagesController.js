import ReactNative from 'react-native';
import * as Updates from 'expo-updates';

const en = require('./en.json');
const ar = require('./ar.json');


ReactNative.I18nManager.allowRTL(false);

let AppLanguage = '';

if (ReactNative.I18nManager.isRTL) {
  AppLanguage = 'ar';
} else {
  AppLanguage = 'en';
}

export function getAppLanguage() {
  return AppLanguage;
}
export function isAr() {
  if (AppLanguage == 'ar') return true;
  else false;
}
export const setAppLanguage = (lang, restart = false) => {
  AppLanguage = lang;

  if (lang == 'ar') {
    ReactNative.I18nManager.forceRTL(true);
  } else {
    ReactNative.I18nManager.forceRTL(false);
  }

  if (restart) {
    console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');
    Updates.reloadAsync();
  }
};


export const strings = key => {
  const _lang = Object.assign({}, { en: en, ar: ar });
  let st = key.split('.');

  if (st.length == 1) return _lang[AppLanguage][st[0]];
  else if (st.length == 2) return _lang[AppLanguage][st[0]][st[1]];
  else if (st.length == 3) return _lang[AppLanguage][st[0]][st[1]][st[2]];
};