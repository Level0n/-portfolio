let tables = Array.from(document.querySelectorAll("body > main > section > div > div.plan-graph > svg > g.plan-graph-table"));
let points = Array.from(document.querySelectorAll("body > main > section > div > div.plan-line > span"));

window.addEventListener('load', function(event) {
  let i = 0;
  let timerId = setInterval(function() {
    tables.map(table => table.classList.remove('plan-graph-table-active'));
    points.map(table => table.classList.remove('plan-line-point-active'));
    i = (i + 1) % tables.length;
    tables[i].classList.add('plan-graph-table-active');
    points[i].classList.add('plan-line-point-active');
  }, 5000);
});

let sliderResources = document.querySelector("body > main > section.resources > div > div.resources-slider");
let slidesResources = document.querySelector("body > main > section.resources > div > div.resources-slider > div > div");
let arrSlideResources = document.querySelectorAll("body > main > section.resources > div > div.resources-slider > div > div > div");
let leftResources = document.querySelector("body > main > section.resources > div > div.resources-slider > svg.resources-slider-left");
let rightResources = document.querySelector("body > main > section.resources > div > div.resources-slider > svg.resources-slider-right");
let pointsResources = Array.from(document.querySelectorAll("body > main > section.resources > div > div.resources-line > span"));
let timerIdResources;

let i = 0;
function goSlide(i) {
  slidesResources.style.transform = `translateX(${-i * 100}%)`;
}

function pointActiver(i) {
  pointsResources.map(point => point.classList.remove('resources-line-point-active'));
  pointsResources[i].classList.add('resources-line-point-active');
}

function startAutoSlide() {
  timerIdResources = setInterval(function() {
    i = (i + 1) % arrSlideResources.length;
    goSlide(i);
    pointActiver(i);
  }, 5000);
}

function stopAutoSlide() {
  clearInterval(timerIdResources);
}

window.addEventListener('load', function(event) {
  startAutoSlide();
});

rightResources.addEventListener('click', function(event) {
  i = (i + 1) % arrSlideResources.length;
  goSlide(i);
  pointActiver(i);
});

leftResources.addEventListener('click', function(event) {
  if (i > 0) i--;
  else i = arrSlideResources.length - 1;
  goSlide(i);
  pointActiver(i);
});

sliderResources.addEventListener('mouseenter', function(event) {
  stopAutoSlide();
});

sliderResources.addEventListener('mouseleave', function(event) {
  startAutoSlide();
});

pointsResources.map((point, index) => point.addEventListener('click', function(event) {
  i = index;
  goSlide(i);
  pointActiver(i);
  stopAutoSlide();
  startAutoSlide();
}));

let pointTestimonials = Array.from(document.querySelectorAll("body > main > section.testimonials > div > div:nth-child(2) > div.testimonials-line > span"));
let slidesTestimonials = document.querySelector("body > main > section.testimonials > div > div:nth-child(2) > div.testimonials-slider > div");
let sliderTestimonials = document.querySelector("body > main > section.testimonials > div > div:nth-child(2) > div.testimonials-slider");
let arrSlideTestimonials = Array.from(document.querySelectorAll("body > main > section.testimonials > div > div:nth-child(2) > div.testimonials-slider > div > div"));
let arrTestimonialsSlideIMGs = Array.from(document.querySelectorAll("body > main > section.testimonials > div > div:nth-child(2) > div.testimonials-slider > div > div > img"));
let timerIdTestimonials;

let j = 0;
function goSlideTestimonials(j) {
  slidesTestimonials.style.transform = `translateX(${-j * 33}vw)`;

  arrSlideTestimonials.map(slide => slide.classList.remove('testimonials-slider-slide-second'));
  arrTestimonialsSlideIMGs.map(img => img.classList.remove('testimonials-slide-img-second'));
  
  if (j < arrSlideTestimonials.length - 1) {
    arrSlideTestimonials[j + 1].classList.add('testimonials-slider-slide-second');
    arrTestimonialsSlideIMGs[j + 1].classList.add('testimonials-slide-img-second');
  }
}

function pointTestimonialsActiver(j) {
  pointTestimonials.map(point => point.classList.remove('testimonials-line-point-active'));
  pointTestimonials[j].classList.add('testimonials-line-point-active');
}

function startAutoTestimonialsSlide() {
  timerIdTestimonials = setInterval(function() {
    j = (j + 1) % arrSlideTestimonials.length;
    goSlideTestimonials(j);
    pointTestimonialsActiver(j);
  }, 5000);
}

function stopAutoTestimonialsSlide() {
  clearInterval(timerIdTestimonials);
}

window.addEventListener('load', function() {
  startAutoTestimonialsSlide();
});

pointTestimonials.map((point, index) => point.addEventListener('click', function(event) {
  j = index;
  goSlideTestimonials(j);
  pointTestimonialsActiver(j);
  stopAutoTestimonialsSlide();
  startAutoTestimonialsSlide();
}));

sliderTestimonials.addEventListener('mouseenter', function(event) {
  stopAutoTestimonialsSlide();
});

sliderTestimonials.addEventListener('mouseleave', function(event) {
  startAutoTestimonialsSlide();
});

let customerBlock = Array.from(document.querySelectorAll("body > main > section.customer > div > div > div"));
let customerBlockTitle = Array.from(document.querySelectorAll("body > main > section.customer > div > div > div > div.customer-block-visible > p"));
let customerBlockShow = Array.from(document.querySelectorAll("body > main > section.customer > div > div > div > div.customer-block-show.customer-block-show"));

customerBlock.map((block, index) => block.addEventListener('click', function(event) {
  let self = !Array.from(customerBlockTitle[index].classList).includes("customer-block-title-active");
  
  customerBlockTitle.map(title => title.classList.remove('customer-block-title-active'));
  customerBlockShow.map(show => show.classList.add('customer-block-hide'));
  
  if (self) {
    customerBlockTitle[index].classList.add('customer-block-title-active');
    customerBlockShow[index].classList.remove('customer-block-hide');
  }
}));