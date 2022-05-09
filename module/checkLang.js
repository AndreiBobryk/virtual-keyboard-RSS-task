import stateKeyboard from './classKeyboardStation';

const checkLang = () => {
  const { currentLang } = stateKeyboard.state;
  if (currentLang == 'en') {
    stateKeyboard.state.currentLang = 'ru';
    localStorage.setItem('lang', stateKeyboard.state.currentLang);
    return dataRu;
  }
  stateKeyboard.state.currentLang = 'en';
  localStorage.setItem('lang', stateKeyboard.state.currentLang);
  return dataEn;
};

export default checkLang;
