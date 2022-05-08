function addEventListenerForKeys() {
  const input = document.querySelector("textarea");
  const keysRows1 = document.querySelectorAll(".key");


  keysRows1.forEach((key) => {
    key.addEventListener("click", (e) => {
      const posCursor = input.selectionStart;

      if (e.target.innerText.length === 1) {
        input.setRangeText(e.target.innerText, posCursor, posCursor, "end");

      } else {
        switch (e.target.innerText) {
          case 'Backspace':
          
            input.setRangeText('', posCursor-1, posCursor, "end");
            break;
          case 'Del':
           
            input.setRangeText('', posCursor, posCursor+1, "end");
            break;
          case 'Enter':
           
            input.setRangeText('\n', posCursor, posCursor, "end");
            break;
          case 'Tab':
           
            input.setRangeText('\t', posCursor, posCursor, "end");
            break;
        }
      
      }
      
  
    });
  });


  // Animation Click

  keysRows1.forEach((key) => {
    key.addEventListener("mousedown", (e) => {
      e.target.classList.add("key_pressed");
    });
  });

  keysRows1.forEach((key) => {
    key.addEventListener("mouseup", (e) => {
      e.target.classList.remove("key_pressed");
    });
  });
}

export default addEventListenerForKeys;
