let buttonUp = document.querySelector("body > button");

buttonUp.addEventListener('click', function(event) {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener('scroll', function(event) {
  if (window.pageYOffset === 0) buttonUp.classList.add('button_up-hide');
  else buttonUp.classList.remove('button_up-hide');
});