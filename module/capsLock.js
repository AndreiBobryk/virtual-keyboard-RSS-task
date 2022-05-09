import stateKeyboard from "./classKeyboardStation.js";

const isCapsLockPressed = (stateShift) => {
    const buttonCapsLock = document.querySelector(".key_capsLock");
    buttonCapsLock.classList.toggle("key_capsLock_on");
    if (buttonCapsLock.classList.contains("key_capsLock_on")) {
      stateKeyboard.state.capsLock = true;
      if (stateShift) {
        document.querySelectorAll(".key").forEach((el) => {
            if (el.innerText.length === 1)
              el.innerText = el.innerText.toLowerCase();
          });

      } else {
        document.querySelectorAll(".key").forEach((el) => {
            if (el.innerText.length === 1)
              el.innerText = el.innerText.toUpperCase();
          });


      }
     
    } else {
      stateKeyboard.state.capsLock = false;
      if (stateShift ) {
        document.querySelectorAll(".key").forEach((el) => {
            if (el.innerText.length === 1)
              el.innerText = el.innerText.toUpperCase();
          });

      } else {
        document.querySelectorAll(".key").forEach((el) => {
            if (el.innerText.length === 1)
              el.innerText = el.innerText.toLowerCase();
          });

      }
     
    }

}

export default isCapsLockPressed;
   
  

