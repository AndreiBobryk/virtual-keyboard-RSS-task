function animationPressedKey () {
   
    document.addEventListener('keydown', (e) => {
      
        document.querySelector('[data="'+e.code+'"]').classList.add('key_pressed')

    })
    document.addEventListener('keyup', (e) => {
      
        document.querySelector('[data="'+e.code+'"]').classList.remove('key_pressed')

    })
}


export default animationPressedKey;