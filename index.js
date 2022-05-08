import domRender from "./module/keyboard-drow.js";
import addEventListenerForKeys from "./module/addListener.js";
import shiftKey from "./module/phichicalKeyboard.js"

window.onload = () => {
domRender();
addEventListenerForKeys();
shiftKey();

}