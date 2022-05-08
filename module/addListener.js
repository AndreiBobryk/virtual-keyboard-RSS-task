

function addEventListenerForKeys () {


  const input = document.querySelector('textarea')
  const keysRows1 = document.querySelector('.keyboard__row').querySelectorAll('.key');
  console.log(keysRows1)

  keysRows1.forEach(key => {
      key.addEventListener('click', (e)=>{
          
          console.log(e.target.innerText);
          console.log('Pos', input.selectionStart);
          console.log('Pos_e_target', e.target.selectionStart)
          console.log('length', input.value.length)
          const posCursor = input.selectionStart;
          const lengthValue = input.value.length
        // if (posCursor === lengthValue) {
        //   input.value += e.target.innerText;

        // } else {
        //   console.log('yet')
          
          
        //   // let posCurr = posCursor;
        //   // console.log(posCurr)
          input.setRangeText(e.target.innerText, posCursor, posCursor, 'end')
          

        // }

        
          
      })
    })
  
}

export default addEventListenerForKeys;