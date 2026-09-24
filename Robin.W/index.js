let headerLi = Array.from(document.body.querySelector('header').querySelectorAll('li'));

function removeChoose() {
  headerLi.map(li => li.classList.remove('header-nav-ul-li-choose'));
}

window.addEventListener('scroll', function(event) {
  let header = document.querySelector("body > header");
  if (pageYOffset === 0) header.classList.remove('header-scroll');
  else header.classList.add('header-scroll');

  removeChoose();
  if (pageYOffset > document.getElementById('contact').offsetTop - document.querySelector('header').offsetHeight) headerLi[3].classList.add('header-nav-ul-li-choose');
  else if (pageYOffset > document.getElementById('photography').offsetTop - document.querySelector('header').offsetHeight - 1) headerLi[2].classList.add('header-nav-ul-li-choose');
  else if (pageYOffset > document.getElementById('work').offsetTop - document.querySelector('header').offsetHeight) headerLi[1].classList.add('header-nav-ul-li-choose');
  else headerLi[0].classList.add('header-nav-ul-li-choose');
});

let nav = document.querySelector("body > header > div > nav");
let burger = document.querySelector("body > header > div > img.header-burger");
burger.addEventListener('click', function(event) {
  nav.classList.toggle('header-nav-hide');
  document.querySelector("body > header").classList.toggle('header-hide');
});

let idLinks = Array.from(document.querySelectorAll('section[id]'));
let headerA = Array.from(document.querySelectorAll("body > header > div > nav > ul > li"));
headerA.map((a, index) => a.addEventListener('click', function(event) {
  event.preventDefault();
  idLinks[index].scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  if (window.innerWidth <= 768) {
    nav.classList.toggle('header-nav-hide');
    document.querySelector("body > header").classList.toggle('header-hide');
  }
}));

let photographyButtons = Array.from(document.querySelectorAll("#photography > div > div.photography-buttons > button"));
let photographyImgs = Array.from(document.querySelectorAll("#photography > div > div.photography-imgs"));
photographyButtons.map((button, index) => button.addEventListener('click', function(event) {
  photographyButtons.map(but => but.classList.remove('photography-button-active'));
  event.target.classList.add('photography-button-active');
  photographyImgs.map(div => div.classList.remove('photography-imgs-active'));
  photographyImgs[index].classList.add('photography-imgs-active')
}));