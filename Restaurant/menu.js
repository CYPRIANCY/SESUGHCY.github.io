// script.js
// document.addEventListener("DOMContentLoaded", function() {
//   const hamburgerMenu = document.querySelector(".hamburger-menu");
//   const menuItems = document.querySelector(".menu-items");

//   hamburgerMenu.addEventListener("click", function() {
//       menuItems.classList.toggle("active");
//   });
// });


const menuButton = document.querySelector(".menu-button")
const navbar = document.querySelector(".navbar")

menuButton.addEventListener("click",() => {
  menuButton.classList.toggle("clicked")
  navbar.classList.toggle("open")
})