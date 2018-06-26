let close = document.getElementsByClassName('close-modal');
let overlay = document.getElementsByClassName('overlay');
let openModal = document.getElementsByTagName('span');
// close.addEventListener('click', () => {
//   overlay.style.display = `none`;
// });

overlay[0].addEventListener('click', () => {
  if(event.target.classList.contains('modal')){
    return false;
  }
  overlay[0].classList.add('hidden-element');
});

openModal[0].addEventListener('click', () => {
  overlay[0].classList.remove('hidden-element');
});