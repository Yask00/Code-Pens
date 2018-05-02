// Needs improvemeent for multiple symbols selected and deleted -> pencil movement
// plus pencil size and movement
let pencil = document.getElementById('pencil');
let input = document.getElementById('input');

input.addEventListener('keydown', (event) => {
     let inputLength = document.getElementById('input').value.length;
     let pencilOffsetLeft = document.getElementById('pencil').style.left;
     let pencilOffsetLeeftNumber = pencilOffsetLeft.substring(0, pencilOffsetLeft.length - 2);
     // Just in case pencil is turned upsidedown
     pencil.style.transform =  `rotate(20deg)`;

     if (pencilOffsetLeeftNumber >= 280) {
       return;
     } 
            
     pencil.style.left = (((6 * inputLength) - 7) + 30) + `px`;
       return;
     });

input.addEventListener('keydown', (event) => {
    let inputLength = document.getElementById('input').value.length;
     
    if(event.code === `Backspace`) {
        pencil.style.left = (((5 * inputLength) - 7) + 20) + `px`;
        // Turn the pencil upsidedown
        pencil.style.transform =  `rotate(200deg)`;
        let pencilOffsetLeft = document.getElementById('pencil').style.left;
        let pencilOffsetLeeftNumber = pencilOffsetLeft.substring(0, pencilOffsetLeft.length - 2);

        // Turn the pencil back around
        if (inputLength <= 2) {
          pencil.style.transform =  `rotate(20deg)`;
          return;
        }
      
        // In case input maxlength is larger than 40
        if (pencilOffsetLeeftNumber > 280) {
           pencil.style.left = 280 + `px`;
           return;
        }
      
     return;
    }
  
});