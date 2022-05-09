import stateKeyboard from "./classKeyboardStation.js";
import { dataEn, dataRu } from "./data.js";


  function isShiftClicked () {

    const isShiftState = (state) => {
        let data;
        stateKeyboard.state.currentLang === 'en' ? data = dataEn : data = dataRu;
    
        let regUp;
        let regDown;
        if (state) {
          regUp = 1; 
          regDown = 0;
      
        }  else {
          regUp = 0; 
          regDown = 1;
      
        } 
      
      
        if (!stateKeyboard.state.capsLock) {
          document.querySelectorAll(".key").forEach((key, index) => {
            key.innerText = data[index][regUp];
          });
        } else {
          document.querySelectorAll(".key").forEach((key, index) => {
            if (
              index === 0 ||
              (index >= 15 && index <= 26) ||
              (index >= 30 && index <= 40) ||
              (index >= 43 && index <= 51)
            ) {
              key.innerText = data[index][regDown];
            } else {
              key.innerText = data[index][regUp];
            }
          });
        }
      
      } 
        

      document.addEventListener('mousedown', (e) => {
          console.log(e.target.innerText);
          if (e.target.innerText === 'Shift' ) {
            isShiftState(true);
            
        }
      })

      document.addEventListener('mouseup', (e) => {
        console.log(e.target.innerText);

        if (e.target.innerText === 'Shift' ) {
            isShiftState(false);
            
        }
      })
  }

  export default isShiftClicked;