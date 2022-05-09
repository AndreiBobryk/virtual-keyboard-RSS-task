import { dataEn, dataRu, code } from "./data.js";


function domRender() {

  let data;
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  const textarea = document.createElement("textarea");
  textarea.classList.add("textarea");
  textarea.setAttribute("autofocus", true);

  textarea.onblur = function () {
      textarea.focus();
  }

  const keyboard = document.createElement("div");
  keyboard.classList.add("keyboard");
  const valueLocalStorage = localStorage.getItem('lang');
  valueLocalStorage == 'en' ? data = dataEn : data = dataRu;


  // 1 row
  const keyboardRow1 = document.createElement("div");
  keyboardRow1.classList.add("keyboard__row");


  for (let i = 0; i < 14; i++) {
    const key = document.createElement("div");
    key.classList.add("key");
    key.innerText = data[i][0];
    if (i === 13) {
      key.classList.add("key_backspace");
    }
    keyboardRow1.appendChild(key);
  }

  keyboard.appendChild(keyboardRow1);


    // 2 row
    const keyboardRow2 = document.createElement("div");
    keyboardRow2.classList.add("keyboard__row");
  
  
    for (let i =14; i < 29; i++) {
      const key = document.createElement("div");
      key.classList.add("key");
      key.innerText = data[i][0];
      if (i === 14 || i === 28) {
        key.classList.add("key_125x");
      }
      keyboardRow2.appendChild(key);
    }
  
    keyboard.appendChild(keyboardRow2);

    // 3 row
    const keyboardRow3 = document.createElement("div");
    keyboardRow3.classList.add("keyboard__row");
  
  
    for (let i =29; i < 42; i++) {
      const key = document.createElement("div");
      key.classList.add("key");
      key.innerText = data[i][0];
      if (i === 29 ) {
        key.classList.add("key_capsLock");
      } 
      if ( i === 41) {
        key.classList.add("key_enter");
      } 
      keyboardRow3.appendChild(key);
    }
  
    keyboard.appendChild(keyboardRow3);

    // 4 row
    const keyboardRow4 = document.createElement("div");
    keyboardRow4.classList.add("keyboard__row");
  
  
    for (let i =42; i < 55; i++) {
      const key = document.createElement("div");
      key.classList.add("key");
      key.innerText = data[i][0];
   
      if (i === 42 || i === 54) {
        key.classList.add("key_shift");
      }
      keyboardRow4.appendChild(key);
    }
  
    keyboard.appendChild(keyboardRow4);

    // 5 row
    const keyboardRow5 = document.createElement("div");
    keyboardRow5.classList.add("keyboard__row");
  
  
    for (let i =55; i < 64; i++) {
      const key = document.createElement("div");
      key.classList.add("key");
      key.innerText = data[i][0];
      if (i === 55) {
        key.classList.add("key_125x");
      }
      if (i === 58) {
        key.classList.add("key_space");
      }
      if (i === 63) {
        key.classList.add("key_125x");
      }
      keyboardRow5.appendChild(key);
    }
  
    keyboard.appendChild(keyboardRow5);


    const title = document.createElement("h1");
    title.innerText = 'RSS Виртуальная клавиатура';
    title.classList.add('title');

    const description1 = document.createElement("p");
    description1.innerText = 'Клавиатура создана в операционной системе Windows';
    description1.classList.add('description');
    
    const description2 = document.createElement("p");
    description2.innerText = 'Для переключения языка комбинация: левыe Shift + Alt';
    description2.classList.add('description');


    
    
  wrapper.appendChild(title)
  wrapper.appendChild(textarea);
  wrapper.appendChild(keyboard);
  wrapper.appendChild(description1);
  wrapper.appendChild(description2);


  document.body.appendChild(wrapper);
  document.querySelectorAll('.key').forEach((el, index) =>{
    el.setAttribute('data', code[index] )
  })
}

export default domRender;
