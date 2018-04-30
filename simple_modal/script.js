let close = document.getElementById('close-modal');

close.addEventListener('click', () => {
  let overlay = document.getElementById('overlay');
  overlay.style.display = `none`;
});