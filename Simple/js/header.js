function showSearch(event) {
  let input = document.querySelector("body > header > div > div > form > input");
  let escape = document.querySelector("body > header > div > div > form > svg.escape-button.header-escape-button");
  input.classList.add('header-form-input-show');
  escape.classList.remove('header-form-escape-hide');
}

function hideSearch(event) {
  let input = document.querySelector("body > header > div > div > form > input");
  let escape = document.querySelector("body > header > div > div > form > svg.escape-button.header-escape-button");
  input.value = '';
  input.classList.remove('header-form-input-show');
  escape.classList.add('header-form-escape-hide');
}

function showBurger(event) {
  let div = document.querySelector("body > header > div > div");
  let nav = document.querySelector("body > header > div > nav");
  let close = document.querySelector("body > header > div > nav > svg");
  div.classList.remove('header-right-buttons-hide');
  nav.classList.remove('header-right-nav-show');
  close.classList.remove('header-burger-close-show');
}

function hideBuger(event) {
  let div = document.querySelector("body > header > div > div");
  let nav = document.querySelector("body > header > div > nav");
  let close = document.querySelector("body > header > div > nav > svg");
  div.classList.add('header-right-buttons-hide');
  nav.classList.add('header-right-nav-show');
  close.classList.add('header-burger-close-show');
}