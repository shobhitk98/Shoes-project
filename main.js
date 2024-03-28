const scroll = new LocomotiveScroll({
  el: document.querySelector('#top'),
  smooth: true
});

'use strict';



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
// -------------------------------loading animation=========================

var tl = gsap.timeline()

tl.to(".load",{
    y:"100vh",
    scale:0.6,
    duration:0
})
tl.to(".load",{
    y:"30vh",
    duration:1,
    delay:1
})
tl.to(".load",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.9
})