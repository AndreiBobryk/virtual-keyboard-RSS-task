import { dataEn, dataRu } from "./data.js";


function domRender() {
    // let dataEn = 0;
    // if (shiftKey) {
    //     dataEn = 1;

    // } else {
    //     dataEn = 0;
    // }
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

  const keyboardRow = document.createElement("div");
  keyboardRow.classList.add("keyboard__row");
  const valueLocalStorage = localStorage.getItem('lang')
  valueLocalStorage == 'en' ? data = dataEn : data = dataRu;


  for (let i = 0; i < data.length; i++) {
    const key = document.createElement("div");
    key.classList.add("key");
    key.innerText = data[i][0];
    if (i === data.length - 1) {
      key.classList.add("key_2x");
    }
    keyboardRow.appendChild(key);
  }

  keyboard.appendChild(keyboardRow);
  wrapper.appendChild(textarea);
  wrapper.appendChild(keyboard);
  document.body.appendChild(wrapper);
}

export default domRender;
