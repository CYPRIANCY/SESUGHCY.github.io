// let menus = document.querySelector("nav");
// let menuBtn = document.querySelector(".menu-btn");
// let closeBTN = document.querySelector(".close-btn");

// menuBtn.addEventListener("click",function(){
//   menus.classList.add("active");
// })

// closeBTN.addEventListener("click",function(){
//   menus.classList.remove("active")
// })



// //Hamburger-Menu
// const menuButton = document.querySelector(".menu-button")
// const navbar = document.querySelector(".navbar")

// menuButton.addEventListener("click",() => {
//   menuButton.classList.toggle("clicked")
//   navbar.classList.toggle("open")
// })

//deal Today start
// const slider = document.querySelector(".slider");
// const bottom = document.querySelector(".bottom");
// const left = document.querySelector(".arrow-left");
// const right = document.querySelector(".arrow-right");
// const test = document.querySelector(".test");
// const images = document.querySelectorAll(".img");

// let slideNumber = 1;
// const length = images.length;

// const nextSlide = () => {
//   slider.style.transform = `translateX(-${slideNumber * 600}px)`;
//   console.log(slideNumber * 600);
//   slideNumber++;
// };
// const getFirstSlide = () => {
//   slider.style.transform = `translateX(0px)`;
//   slideNumber = 1;
// };

// right.addEventListener("click", () => {
//   slideNumber < length ? nextSlide() : getFirstSlide();
//   //   changeColor();
// });
// const prevSlide = () => {
//   slider.style.transform = `translateX(-${(slideNumber - 2) * 600}px)`;
//   slideNumber--;
// };
// const getLastSlide = () => {
//   slider.style.transform = `translateX(-${(length - 1) * 600}px)`;
//   slideNumber = length;
// };
// left.addEventListener("click", () => {
//   slideNumber > 1 ? prevSlide() : getLastSlide();
//   changeColor();
// });

// for (let i = 0; i < length; i++) {
//   const div = document.createElement("div");
//   div.className = "button";
//   bottom.appendChild(div);
// }

// const buttons = document.querySelectorAll(".button");
// buttons[0].style.backgroundColor = "black";

// const resetBg = () => {
//   buttons.forEach((button) => {
//     button.style.backgroundColor = "transparent";
//   });
// };
// console.log(buttons);
// buttons.forEach((button, i) => {
//   button.addEventListener("click", () => {
//     resetBg();
//     slider.style.transform = `translateX(-${i * 600}px)`;
//     slideNumber = i + 1;
//     button.style.backgroundColor = "black";
//   });
// });

// const changeColor = () => {
//   resetBg();
//   buttons[slideNumber - 1].style.backgroundColor = "black";
// };

//swiper js code
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    968:{
      slidesPerView: 3,
    },
  }
});

//deal Today close


//--------------------Swiper JS Code



// Dynamic Images
const sectionCenter = document.querySelector('.menus_items_container');

const filterBtns = document.querySelectorAll('.btn-cat');

filterBtns.forEach(function(btn){
  btn.addEventListener("click",function(e){
    const Category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem){
   if(menuItem.Category==Category){
     return menuItem;
      }
    });
    if(Category=="all"){
      displayMenusItem(menu);
    }
    else{
      displayMenusItem(menuCategory);
    }
  })

});


const menu =[
  {
    id: 1,
    title: "Chicken and Cashews",
    Category: "Dinner",
    price: 25,
    img: "./imgs/f1.png"
  },

  {
    id: 2,
    title: "Chicken and Cashews",
    Category: "Lunch",
    price: 25,
    img: "./imgs/f2.png"
  },

  {
    id: 3,
    title: "Chicken and Cashews",
    Category: "Drinks",
    price: 25,
    img: "./imgs/f3.png"
  },

  {
    id: 4,
    title: "Chicken and Cashews",
    Category: "Starter",
    price: 25,
    img: "./imgs/f4.png"
  },

  {
    id: 5,
    title: "Chicken and Cashews",
    Category: "Dinner",
    price: 25,
    img: "./imgs/f5.png"
  },

  {
    id: 6,
    title: "Chicken and Cashews",
    Category: "Lunch",
    price: 25,
    img: "./imgs/f6.png"
  },

  {
    id: 7,
    title: "Chicken and Cashews",
    Category: "Drinks",
    price: 25,
    img: "./imgs/f7.png"
  },

  {
    id: 8,
    title: "Chicken and Cashews",
    Category: "Starter",
    price: 25,
    img: "./imgs/f8.png"
  },

  {
    id: 9,
    title: "Chicken and Cashews",
    Category: "Dinner",
    price: 25,
    img: "./imgs/f1.png"
  },
]


window.addEventListener("DOMContentLoaded",function(){
  displayMenusItem(menu);
});

function displayMenusItem(menuItem){
  let displayMenusItem = menuItem.map(function(item){
    return `<div class="img_cards">
    <img src=${item.img} alt="">
    <p class="price">only on ${item.price}Dolloars</p>
    <p>${item.title}</p>
  </div>`;
  })
  displayMenusItem = displayMenusItem.join("");
  sectionCenter.innerHTML = displayMenusItem;
}

// Static Counter start 
const countersEl = document.querySelectorAll('.num');

countersEl.forEach((countersEl)=>{
  countersEl.innerText = "0";
  increamentCounter();


  function increamentCounter(){
    let currentNum = +countersEl.innerText;
    const dataceil = countersEl.getAttribute("data-ceil");
    const increament = dataceil / 15;
    currentNum = Math.ceil(currentNum+increament);

    if(currentNum<dataceil){
      countersEl.innerText = currentNum;
      setTimeout(increamentCounter, 70);
    }
    else{
      countersEl.innerHTML = dataceil
    }
  }
});

// Static Counter close 



//sticky menu start
const nav = document.querySelector("header");

window.addEventListener("scroll", function(){

  if(this.document.documentElement.scrollTop> 20){
    nav.classList.add("sticky");
  }
  else{
    nav.classList.remove("sticky");
  }
 
})

//sticky menu close

//parallax effect
const parallax = document.querySelector("#showcase");

window.addEventListener("scroll", function(){
  let offset = this.window.pageYOffset;
  parallax.computedStyleMap.backgroundPositionY = offset * 0.7 + "px;"
})




