import domRender from "./module/keyboard-drow.js";
import addEventListenerForKeys from "./module/addListener.js";
import shiftKey from "./module/phichicalKeyboard.js";
import animationPressedKey from "./module/phichicalKeyboardAnimPress.js";
import isShiftClicked from "./module/shiftKey.js";

window.onload = () => {
  domRender();
  addEventListenerForKeys();
  shiftKey();
  animationPressedKey();
  isShiftClicked();
};
