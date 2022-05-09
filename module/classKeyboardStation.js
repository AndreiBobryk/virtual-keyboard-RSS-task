class KeyboardStation {
  constructor() {
    this.state = {
      capsLock: false,
      currentLang: 'en',

    };
  }
}

const stateKeyboard = new KeyboardStation();

export default stateKeyboard;
