import { dataEn, dataRu } from "./data.js";

function shiftKey() {
  class KeyboardStation {
    constructor() {
      this.state = {
        capsLock: false,
        currentLang: "en",
       
      };
    }
  }
  const stateKeyboard = new KeyboardStation;
let data;
let flagShift = false;
 const checkLang = () => { 
     const currentLang = stateKeyboard.state.currentLang;
     if (currentLang == 'en') {
      data = dataRu;
      stateKeyboard.state.currentLang = 'ru';
     
  } else {
      data = dataEn;
      stateKeyboard.state.currentLang = 'en';
 }
 localStorage.setItem('lang', stateKeyboard.state.currentLang)
}
checkLang();
  let flag = false;


  document.addEventListener("keydown", (event) => {
console.log(event)
    if (event.shiftKey) {
      flagShift = true;
      document.querySelectorAll(".key").forEach((key, index) => {
        key.innerText = data[index][1];
      });
      flag = true;
      if (flag && event.altKey) {
        flag = false;

        checkLang();
        document.querySelectorAll(".key").forEach((key, index) => {
            key.innerText = data[index][0];
          });

       
      }
    }

    if (event.code === 'CapsLock') {
      const buttonCapsLock = document.querySelector('.key_capsLock');
      buttonCapsLock.classList.toggle('key_capsLock_on');
      if (buttonCapsLock.classList.contains('key_capsLock_on')) {
        document.querySelectorAll('.key').forEach((el, index) => {
          if (el.innerText.length ===1) el.innerText = el.innerText.toUpperCase();
        })
      } else {
        document.querySelectorAll('.key').forEach((el, index) => {
          if (el.innerText.length ===1) el.innerText = el.innerText.toLowerCase();
        })
      }

    }

   
  });

  document.addEventListener("keyup", (event) => {
    if (event.shiftKey !== true && flagShift) {
      flagShift = false;
      console.log("shift keyup");
      document.querySelectorAll(".key").forEach((key, index) => {
        console.log("rt");
        key.innerText = data[index][0];
      });
    }
  });
}

export default shiftKey;
